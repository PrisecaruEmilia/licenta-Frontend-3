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

  static ProductDetails(id) {
    return this.BaseURL + '/product-details/' + id;
  }
  static NotificationHistory = this.BaseURL + '/notification';

  static ProductBySearch(searchKey) {
    return this.BaseURL + '/search/' + searchKey;
  }
}

export default AppUrl;
