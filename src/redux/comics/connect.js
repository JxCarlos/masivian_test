import { connect } from "react-redux";

import { mapStateToProps, mapDispatchToProps } from "./props";

const bindComic = Component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component);

export { bindComic };
