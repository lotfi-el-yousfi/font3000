// store/config.js
import { defineStore } from 'pinia';

export const useAppConfigStore = defineStore('configStore', {
  state: () => ({
    selected_end_point: 0,
    endpointsConfig: [
      {
        http_verb: "POST",
        endpoint: "/createItem",
        body: [
          {
            field_name: "name",
            field_type: "text",
            validation: {
              required: true,
              minLength: 3
            }
          },
          {
            field_name: "price",
            field_type: "number",
            validation: {
              required: true,
              min: 0
            }
          }
        ],
        require_auth: true
      },
      {
        http_verb: "GET",
        endpoint: "/items",
        require_auth: false
      },
      {
        http_verb: "GET",
        endpoint: "/items",
        require_auth: false
      },
      {
        http_verb: "GET",
        endpoint: "/items",
        require_auth: false
      },
      {
        http_verb: "GET",
        endpoint: "/items",
        require_auth: false
      },
      {
        http_verb: "GET",
        endpoint: "/items",
        require_auth: false
      },
      {
        http_verb: "GET",
        endpoint: "/items",
        require_auth: false
      },
      {
        http_verb: "GET",
        endpoint: "/items",
        require_auth: false
      },
      {
        http_verb: "GET",
        endpoint: "/items",
        require_auth: false
      },
    ]
  }),

  getters: {
    getEndpointConfig: (state) => (endpoint: any) => {
      return state.endpointsConfig.find(config => config.endpoint === endpoint);
    }
  }
});
