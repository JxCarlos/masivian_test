import { searchCommicAction } from "./actions";
import { BASE_URL } from "../../config";

export const mapStateToProps = ({ commicsReducer }) => {
  return { ...commicsReducer };
};

export const mapDispatchToProps = dispatch => ({
  dispatch,

  fechtSearchCommic: (ramdonCommic) => {
    fetch(`${BASE_URL}/${ramdonCommic}/info.0.json`)
      .then(response => response.json())
      .then(data => dispatch(searchCommicAction(data)))
      .catch(err => console.log(err.message));
	},
	
});
