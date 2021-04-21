import { CATALOGUE } from "./actionTypes";

export const catalogue_page = (link:any) => {
  console.log(link);
  let result_cat = { catinfo:{} };
  return async (dispatch: any, getState: any, client: any) => {
  fetch(link)
      .then(res => res.json())
      .then(
        (result) => {
            console.log("actions",result);
            result_cat = result;
            console.log("inside fetch",result_cat);
            dispatch(fetchCatalogueInfoSuccess(result_cat));
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {         
        }
      )
      console.log("after res", result_cat);
  };
};

export const fetchCatalogueInfoSuccess = (data: any) => {
  console.log(data);
  return {
    type: CATALOGUE,
    state: "CATALOGUE",
    payload: data
  };

  
};



