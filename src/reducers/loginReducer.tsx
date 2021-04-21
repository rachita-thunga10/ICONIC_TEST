import {CATALOGUE} from "../actions/actionTypes";


const initialState: any = {
  cat:[],
  page:0,
  firstpage_link: "",
  lastpage_link:"",
  selfpage_link:"",
  nextpage_link:"",
};

export default function loginReducer(state = initialState, action: any) {
  switch (action.type) {
    case CATALOGUE:
      const check_catdata = action.payload;
      action.payload = { check_catdata};
      console.log("payload",action.payload);

      return {
        ...state,
        ...action.payload
      };
      
 default:
      return state;
  }
}

