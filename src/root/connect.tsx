import * as React from "react";
import httpService from "../services/Http/HttpService";
export function connect(Component: React.ComponentType<any>, mappedProps: {}) {
  return class extends React.Component<
    {},
    {
      [key: string]: {},
    }
  > {
    componentWillMount() {
      Object.keys(mappedProps).forEach((key) => {
        const source =
          mappedProps[key].source instanceof Function
            ? mappedProps[key].source(this.props)
            : mappedProps[key].source;
        httpService
          .get(source)
          .then((result) => {
            this.setState({
              [key]: result,
            });
          })
          .catch(() => {
            this.setState({
              [key]: false,
            });
          });
      });
    }
    render() {
      return <Component {...this.state} {...this.props} />;
    }
  };
}
