class AppUrl {
  static BaseURL = 'http://127.0.0.1:8000/api';
  static VisitorDetails = this.BaseURL + '/get-visitor';
  static PostContact = this.BaseURL + '/post-contact';
  static AllSiteInfo = this.BaseURL + '/all-site-info';
  static AllCategoryDetails = this.BaseURL + '/all-category';

  static ProductListByRemark(remark) {
    return this.BaseURL + '/product-list-remark/' + remark;
  }

  static ProductListByCategory(category) {
    return this.BaseURL + '/product-list-category/' + category;
  }

  static ProductListBySubCategory(category, subcategory) {
    return (
      this.BaseURL + '/product-list-subcategory/' + category + '/' + subcategory
    );
  }

  static AllSliderDetails = this.BaseURL + '/all-slider-details';

  static ProductByCode(code) {
    return this.BaseURL + '/product/' + code;
  }
  static ProductDetails(id) {
    return this.BaseURL + '/product-details/' + id;
  }
  static NotificationHistory = this.BaseURL + '/notification';

  static ProductBySearch(searchKey) {
    return this.BaseURL + '/search/' + searchKey;
  }

  static UserLogin = this.BaseURL + '/login';
  static UserData = this.BaseURL + '/user';
  static UserRegister = this.BaseURL + '/register';
  static UserForgetPassword = this.BaseURL + '/forget-password';
  static UserResetPassword = this.BaseURL + '/reset-password';

  static SimilarProduct(subcategory) {
    return this.BaseURL + '/similar/' + subcategory;
  }
  static ReviewList(productCode) {
    return this.BaseURL + '/review-list/' + productCode;
  }

  static AddToCart = this.BaseURL + '/add-to-cart';

  static CartCount(email) {
    return this.BaseURL + '/cart-count/' + email;
  }

  static AddFavourite(product_code, email) {
    return this.BaseURL + '/add-favorite/' + product_code + '/' + email;
  }

  static FavouriteList(email) {
    return this.BaseURL + '/favorite-list/' + email;
  }
  static FavouriteRemove(product_code, email) {
    return this.BaseURL + '/favorite-remove/' + product_code + '/' + email;
  }

  static CartList(email) {
    return this.BaseURL + '/cart-list/' + email;
  }

  static RemoveCartList(id) {
    return this.BaseURL + '/remove-cart-list/' + id;
  }
}

export default AppUrl;
