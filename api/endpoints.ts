/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/food/action/{id}/": {
    get: operations["food_action_read"];
    put: operations["food_action_update"];
    delete: operations["food_action_delete"];
    patch: operations["food_action_partial_update"];
    parameters: {
      path: {
        id: string;
      };
    };
  };
  "/food/{food_shop_id}/": {
    /**
     * Errors list:
     *     '400' : "your_error",
     */
    get: operations["food_read"];
    /**
     * Errors list:
     *     '400' : "your_error",
     */
    post: operations["food_create"];
    parameters: {
      path: {
        food_shop_id: string;
      };
    };
  };
  "/foodshop/": {
    /**
     * Errors list:
     *     '400' : "your_error",
     */
    get: operations["foodshop_list"];
    /**
     * Errors list:
     *     '400' : "your_error",
     */
    post: operations["foodshop_create"];
    parameters: {};
  };
  "/foodshop/food-shop-list/": {
    get: operations["foodshop_food-shop-list_list"];
    parameters: {};
  };
  "/foodshop/food-shop-top-list/": {
    get: operations["foodshop_food-shop-top-list_list"];
    parameters: {};
  };
  "/foodshop/{id}/": {
    get: operations["foodshop_read"];
    put: operations["foodshop_update"];
    delete: operations["foodshop_delete"];
    patch: operations["foodshop_partial_update"];
    parameters: {
      path: {
        id: string;
      };
    };
  };
  "/image-save/": {
    post: operations["image-save_create"];
    parameters: {};
  };
  "/image/{filename}": {
    /**
     * Foydalanuvchiga rasm URL'ini qaytarish uchun ishlatiladi.
     * Frontend faqat URL ni oladi va rasmni to'g'ridan-to'g'ri yuklab olishi mumkin boladi.
     */
    get: operations["image_read"];
    parameters: {
      path: {
        filename: string;
      };
    };
  };
  "/notify/list": {
    get: operations["notify_list_list"];
    parameters: {};
  };
  "/notify/read": {
    /** set as read. */
    post: operations["notify_read_create"];
    parameters: {};
  };
  "/profile/create_user": {
    post: operations["profile_create_user_create"];
    parameters: {};
  };
}

export interface definitions {
  FoodUpdate: {
    /**
     * Id
     * Format: uuid
     */
    id?: string;
    /**
     * Food type
     * @enum {string}
     */
    food_type:
      | "milliy_taomlar"
      | "yevro_taomlar"
      | "turk_taomlar"
      | "parhez_taomlar"
      | "delikates_taomlar"
      | "shirinliklar"
      | "ichimliklar"
      | "baliqli_taomlar";
    /** Photo */
    photo: string;
    /** Name */
    name: string;
    /** Description */
    description: string;
  };
  Food: {
    /**
     * Id
     * Format: uuid
     */
    id?: string;
    /**
     * Food type
     * @enum {string}
     */
    food_type:
      | "milliy_taomlar"
      | "yevro_taomlar"
      | "turk_taomlar"
      | "parhez_taomlar"
      | "delikates_taomlar"
      | "shirinliklar"
      | "ichimliklar"
      | "baliqli_taomlar";
    /** Photo */
    photo: string;
    /** Name */
    name: string;
    /** Description */
    description: string;
  };
  FoodShop: {
    /**
     * Id
     * Format: uuid
     */
    id?: string;
    /** Name */
    name: string;
    /** Info */
    info: string;
    /** Phone number */
    phone_number: string;
    social_links?: string[];
    /** Address */
    address: string;
    /** Lat */
    lat?: number;
    /** Lon */
    lon?: number;
    /** Photo */
    photo?: string;
    /**
     * Shop type
     * @enum {string}
     */
    shop_type:
      | "restoran"
      | "fast_food"
      | "turk_taomlar"
      | "choyxona"
      | "toyxona"
      | "shirinliklar"
      | "ichimliklar";
    food_types?: string[];
    /**
     * Status
     * @enum {string}
     */
    status?: "pending" | "accept" | "reject";
    /**
     * Created at
     * Format: date-time
     */
    created_at?: string;
    /**
     * Created by
     * Format: uuid
     */
    created_by?: string;
  };
  FoodShopTOP: {
    /**
     * Id
     * Format: uuid
     */
    id?: string;
    /** Name */
    name: string;
    /** Info */
    info: string;
    /** Phone number */
    phone_number: string;
    /** Social links */
    social_links?: { [key: string]: unknown };
    /** Address */
    address: string;
    /** Lat */
    lat?: number;
    /** Lon */
    lon?: number;
    /** Photo */
    photo?: string;
    /**
     * Shop type
     * @enum {string}
     */
    shop_type:
      | "restoran"
      | "fast_food"
      | "turk_taomlar"
      | "choyxona"
      | "toyxona"
      | "shirinliklar"
      | "ichimliklar";
    /** Food types */
    food_types?: { [key: string]: unknown };
    /**
     * Status
     * @enum {string}
     */
    status?: "pending" | "accept" | "reject";
    /**
     * Created at
     * Format: date-time
     */
    created_at?: string;
    /**
     * Created by
     * Format: uuid
     */
    created_by?: string;
  };
  FoodShopUpdate: {
    /**
     * Id
     * Format: uuid
     */
    id?: string;
    /** Name */
    name: string;
    /** Info */
    info: string;
    /** Phone number */
    phone_number: string;
    social_links?: string[];
    /** Address */
    address: string;
    /** Lat */
    lat?: number;
    /** Lon */
    lon?: number;
    /** Photo */
    photo?: string;
    /**
     * Shop type
     * @enum {string}
     */
    shop_type:
      | "restoran"
      | "fast_food"
      | "turk_taomlar"
      | "choyxona"
      | "toyxona"
      | "shirinliklar"
      | "ichimliklar";
    food_types?: string[];
    /**
     * Status
     * @enum {string}
     */
    status?: "pending" | "accept" | "reject";
    /**
     * Created at
     * Format: date-time
     */
    created_at?: string;
    /**
     * Created by
     * Format: uuid
     */
    created_by?: string;
  };
  Notification: {
    /**
     * Id
     * Format: uuid
     */
    id?: string;
    /**
     * Created at
     * Format: date-time
     */
    created_at?: string;
    /** Title */
    title: string;
    /** Message */
    message: string;
    /** Is read */
    is_read?: boolean;
    /** Type */
    type: string;
    /** Message image */
    message_image?: string;
    /** Extra data */
    extra_data?: { [key: string]: unknown };
    /**
     * From user
     * Format: uuid
     */
    from_user: string;
    /**
     * To user
     * Format: uuid
     */
    to_user: string;
  };
  CreateUser: {
    /**
     * Username
     * @description Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     */
    username: string;
    /** Password */
    password: string;
    /**
     * Lang
     * @enum {string}
     */
    lang?: "uz" | "ru";
    /** Phone number */
    phone_number?: string;
    /** Location */
    location?: string;
  };
}

export interface operations {
  food_action_read: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        schema: definitions["FoodUpdate"];
      };
    };
  };
  food_action_update: {
    parameters: {
      path: {
        id: string;
      };
      body: {
        data: definitions["FoodUpdate"];
      };
    };
    responses: {
      200: {
        schema: definitions["FoodUpdate"];
      };
    };
  };
  food_action_delete: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      204: never;
    };
  };
  food_action_partial_update: {
    parameters: {
      path: {
        id: string;
      };
      body: {
        data: definitions["FoodUpdate"];
      };
    };
    responses: {
      200: {
        schema: definitions["FoodUpdate"];
      };
    };
  };
  /**
   * Errors list:
   *     '400' : "your_error",
   */
  food_read: {
    parameters: {
      path: {
        food_shop_id: string;
      };
      query: {
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        page_size?: number;
      };
    };
    responses: {
      200: {
        schema: {
          count: number;
          /** Format: uri */
          next?: string;
          /** Format: uri */
          previous?: string;
          results: definitions["Food"][];
        };
      };
    };
  };
  /**
   * Errors list:
   *     '400' : "your_error",
   */
  food_create: {
    parameters: {
      path: {
        food_shop_id: string;
      };
      body: {
        data: definitions["Food"];
      };
    };
    responses: {
      201: {
        schema: definitions["Food"];
      };
    };
  };
  /**
   * Errors list:
   *     '400' : "your_error",
   */
  foodshop_list: {
    parameters: {
      query: {
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        page_size?: number;
        user_id: string;
      };
    };
    responses: {
      200: {
        schema: {
          count: number;
          /** Format: uri */
          next?: string;
          /** Format: uri */
          previous?: string;
          results: definitions["FoodShop"][];
        };
      };
    };
  };
  /**
   * Errors list:
   *     '400' : "your_error",
   */
  foodshop_create: {
    parameters: {
      body: {
        data: definitions["FoodShop"];
      };
      query: {
        user_id: string;
      };
    };
    responses: {
      201: {
        schema: definitions["FoodShop"];
      };
    };
  };
  "foodshop_food-shop-list_list": {
    parameters: {
      query: {
        /** A search term. */
        search?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        page_size?: number;
      };
    };
    responses: {
      200: {
        schema: {
          count: number;
          /** Format: uri */
          next?: string;
          /** Format: uri */
          previous?: string;
          results: definitions["FoodShopTOP"][];
        };
      };
    };
  };
  "foodshop_food-shop-top-list_list": {
    parameters: {};
    responses: {
      200: {
        schema: definitions["FoodShopTOP"][];
      };
    };
  };
  foodshop_read: {
    parameters: {
      path: {
        id: string;
      };
      query: {
        user_id: string;
      };
    };
    responses: {
      200: {
        schema: definitions["FoodShopUpdate"];
      };
    };
  };
  foodshop_update: {
    parameters: {
      path: {
        id: string;
      };
      body: {
        data: definitions["FoodShopUpdate"];
      };
    };
    responses: {
      200: {
        schema: definitions["FoodShopUpdate"];
      };
    };
  };
  foodshop_delete: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      204: never;
    };
  };
  foodshop_partial_update: {
    parameters: {
      path: {
        id: string;
      };
      body: {
        data: definitions["FoodShopUpdate"];
      };
    };
    responses: {
      200: {
        schema: definitions["FoodShopUpdate"];
      };
    };
  };
  "image-save_create": {
    parameters: {};
    responses: {
      201: unknown;
    };
  };
  /**
   * Foydalanuvchiga rasm URL'ini qaytarish uchun ishlatiladi.
   * Frontend faqat URL ni oladi va rasmni to'g'ridan-to'g'ri yuklab olishi mumkin boladi.
   */
  image_read: {
    parameters: {
      path: {
        filename: string;
      };
    };
    responses: {
      200: unknown;
    };
  };
  notify_list_list: {
    parameters: {
      query: {
        /** A search term. */
        search?: string;
        /** A page number within the paginated result set. */
        page?: number;
        /** Number of results to return per page. */
        page_size?: number;
        /** Agar `news = True` bolsa oqilmaganlarini yuboradi aks holda hammasini */
        news?: string;
        type?: string;
      };
    };
    responses: {
      200: {
        schema: {
          count: number;
          /** Format: uri */
          next?: string;
          /** Format: uri */
          previous?: string;
          results: definitions["Notification"][];
        };
      };
    };
  };
  /** set as read. */
  notify_read_create: {
    parameters: {
      query: {
        /** notification id */
        id?: string;
      };
    };
    responses: {
      201: unknown;
    };
  };
  profile_create_user_create: {
    parameters: {
      body: {
        data: definitions["CreateUser"];
      };
    };
    responses: {
      201: {
        schema: definitions["CreateUser"];
      };
    };
  };
}

export interface external {}
