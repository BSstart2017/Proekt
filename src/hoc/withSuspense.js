import React from "react";


export const withSuspense = (Component) => ({
  render() {
    return (
      <React.Suspense fallback={<PreLoader />}>
          <Component {...props}/>
      </React.Suspense>
      )
    }
  }
  return withSuspense;
}
