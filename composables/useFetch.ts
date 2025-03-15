import { paths } from "~/api/endpoints";
import { Ref } from "vue";

/**
 * Replaces path parameters in a URL template
 * @param path The URL template with placeholders in {paramName} format
 * @param params The parameters to replace in the path
 * @returns A URL with all parameters replaced
 */
const replaceResources = (path: string, params: Record<string, string>): string => {
  let newPath = path;
  for (const [key, value] of Object.entries(params)) {
    newPath = newPath.replace(`{${key}}`, value);
  }
  return newPath;
};

/**
 * Composable for making API requests with proper types and readable keys in devtools
 * @param path API endpoint path with TypeScript hints
 * @param method HTTP method with TypeScript hints
 * @param resources Path parameters to replace in the URL
 * @param parameters Query parameters for the request
 * @param body Request body (automatically excluded for GET/HEAD methods)
 * @param options Additional options like immediate and transform
 * @returns Reactive data, error, pending state, and refetch function
 */
export function useApi<P extends keyof paths, M extends keyof paths[P]>(
  path: P,
  method: M,
  resources?: paths[P][M] extends { parameters: { path: infer R } } ? R : {},
  parameters?: paths[P][M] extends { parameters: { query?: infer Q } } ? Q : {},
  body?: paths[P][M] extends { requestBody?: { content: { "application/json": infer B } } } ? B : {},
  options?: {
    immediate?: boolean;
    transform?: (data: any) => any;
  }
) {
  // Set defaults
  const resourcesObj = resources || {};
  const parametersObj = parameters || {};
  const bodyObj = body || {};
  const immediate = options?.immediate !== undefined ? options.immediate : true;
  const transform = options?.transform || ((data) => data);

  // Create request URL
  const config = useRuntimeConfig();
  const processedPath = Object.keys(resourcesObj).length > 0 
    ? replaceResources(path as string, resourcesObj as Record<string, string>) 
    : path as string;
  const fullPath = `${config.public.api.url}${processedPath}`;
  
  // Create a descriptive key for devtools
  const requestKey = `${String(method).toUpperCase()} ${processedPath.replace(/[{}]/g, '')}`;

  // Create fetch options
  const fetchOptions: any = {
    method: method as string,
    params: parametersObj,
    credentials: "include" as const,
    key: requestKey,
    immediate,
  };
  
  // Only add body for methods that support it (not GET or HEAD)
  const methodStr = method as string;
  if (methodStr !== 'GET' && methodStr !== 'HEAD' && Object.keys(bodyObj).length > 0) {
    fetchOptions.body = bodyObj;
  }

  // Execute the API request
  const { data, error, pending, refresh } = useFetch(fullPath, fetchOptions);

  // Transform data if needed
  const transformedData = computed(() => {
    return data.value ? transform(data.value) : null;
  });

  return {
    data: transformedData,
    error,
    pending,
    refresh,
  };
}