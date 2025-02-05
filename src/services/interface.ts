export interface UnsplashImage {
    id: string;
    alt_description: string;
    urls: {
      small: string;
      regular: string;
    };
    user: {
      name: string;
      portfolio_url: string;
      social: {
        instagram_username: string;
      };
      total_likes: number;
      location: string;
    };
  }
  
  export interface UnsplashResponse {
    results: UnsplashImage[];
    total: number;
    total_pages: number;
  }