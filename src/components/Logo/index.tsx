import React from 'react';

import { Factory } from 'native-base';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function Logo(props) {
  const NbSvg = Factory(Svg);
  return (
    <NbSvg w="727" h="116" viewBox="0 0 727 116" fill="none" {...props}>
      <Path
        d="M50.759.876C42.9-.612 34.76-.243 27.172 2.275 15.234 6.239 1.328 16.339.13 41.79-2 87.04 22.21 110.828 56.801 115.664c26.148 3.656 43.782-23.474 50.828-36.922a46.24 46.24 0 005.367-22.205c-.298-17.597-9.522-45.683-62.237-55.66z"
        fill="url(#logo-gradient)"
      />
      <Path
        d="M78.243 34.89l-39.945-4.216c-7.435-.784-12.765 7.04-9.323 13.69a17.938 17.938 0 012.002 8.511c-.044 2.96-.213 5.326-2.256 8.452-2.042 3.127-7.98 10.275-7.98 10.275a1.907 1.907 0 00.586 2.497c.26.177.558.287.87.32 0 0 8.533-.466 12.112-.929 3.58-.462 6.197 1.451 8.825 3.248a19.265 19.265 0 016.234 7.049c3.45 6.652 12.897 6.78 16.535.222l19.544-35.21a9.431 9.431 0 00.127-8.9 9.354 9.354 0 00-7.331-5.01zM168.216 94.038c-6.337 0-11.773-.934-16.309-2.802-4.535-1.868-7.971-4.302-10.305-7.304-2.268-3.068-3.469-6.403-3.602-10.005 0-.534.2-1 .6-1.4.467-.468 1.001-.701 1.601-.701h12.607c.8 0 1.434.167 1.901.5.533.267 1.067.7 1.601 1.301.867 1.734 2.267 3.168 4.202 4.302 1.934 1.134 4.502 1.701 7.704 1.701 3.802 0 6.703-.6 8.704-1.8 2.001-1.201 3.002-2.836 3.002-4.903 0-1.468-.534-2.668-1.601-3.602-1-.934-2.601-1.768-4.802-2.502-2.202-.733-5.47-1.567-9.806-2.5-8.004-1.668-14.007-4.103-18.009-7.305-3.935-3.268-5.903-7.904-5.903-13.907 0-4.069 1.134-7.704 3.402-10.906 2.268-3.201 5.503-5.703 9.705-7.504 4.202-1.8 9.105-2.701 14.707-2.701 5.804 0 10.839 1 15.108 3.002 4.269 2 7.504 4.535 9.705 7.604 2.268 3.001 3.469 5.97 3.602 8.904 0 .6-.2 1.1-.6 1.501-.4.4-.9.6-1.501.6h-13.207c-.8 0-1.467-.133-2.001-.4-.467-.267-.9-.7-1.3-1.3-.401-1.535-1.501-2.835-3.302-3.903-1.734-1.067-3.902-1.6-6.504-1.6-3.001 0-5.302.533-6.903 1.6-1.601 1.068-2.401 2.635-2.401 4.703 0 1.4.433 2.568 1.3 3.502.934.934 2.402 1.8 4.403 2.601 2.067.734 5.002 1.5 8.804 2.301 6.203 1.134 11.139 2.568 14.808 4.302 3.735 1.668 6.47 3.87 8.204 6.604 1.734 2.668 2.602 6.036 2.602 10.105 0 4.47-1.301 8.371-3.902 11.706-2.535 3.269-6.104 5.803-10.706 7.604-4.536 1.734-9.738 2.602-15.608 2.602zM233.959 94c-13.807 0-20.711-6.57-20.711-19.71V55.08h-7.804c-.734 0-1.368-.234-1.901-.7-.467-.468-.701-1.068-.701-1.802v-8.104c0-.734.234-1.334.701-1.8.533-.468 1.167-.701 1.901-.701h7.804V24.498c0-.734.233-1.334.7-1.801.534-.467 1.134-.7 1.801-.7h11.606c.734 0 1.334.233 1.801.7.467.467.701 1.067.701 1.8v17.476h12.506c.734 0 1.334.233 1.801.7.534.467.8 1.067.8 1.801v8.104c0 .734-.266 1.334-.8 1.801-.467.467-1.067.7-1.801.7h-12.506v17.81c0 4.936 1.901 7.404 5.703 7.404h7.704c.733 0 1.334.233 1.801.7.466.467.7 1.068.7 1.801V91.5c0 .667-.234 1.267-.7 1.8-.467.468-1.068.701-1.801.701h-9.305zM269.066 94.038c-3.535 0-6.77-.667-9.705-2.001-2.868-1.401-5.136-3.269-6.803-5.603-1.601-2.402-2.402-5.036-2.402-7.904 0-4.603 1.868-8.305 5.603-11.106 3.802-2.802 9.005-4.736 15.608-5.803l12.507-1.901v-1.401c0-2.535-.534-4.402-1.601-5.603-1.067-1.2-2.868-1.8-5.403-1.8-1.534 0-2.801.266-3.802.8-1 .533-2.034 1.267-3.101 2.2-.934.801-1.635 1.335-2.101 1.602-.201.533-.567.8-1.101.8h-10.906c-.667 0-1.234-.2-1.701-.6-.4-.467-.567-1-.5-1.601.067-1.801.934-3.802 2.601-6.003 1.735-2.201 4.336-4.102 7.805-5.703 3.535-1.601 7.87-2.402 13.006-2.402 8.205 0 14.274 1.835 18.21 5.503 3.935 3.602 5.903 8.471 5.903 14.608v31.416c0 .667-.233 1.268-.7 1.801-.467.467-1.068.7-1.801.7h-11.606c-.667 0-1.268-.233-1.801-.7-.467-.533-.701-1.134-.701-1.8v-4.503c-1.467 2.068-3.535 3.769-6.203 5.103-2.601 1.267-5.703 1.9-9.305 1.9zm4.703-11.406c3.068 0 5.536-1 7.404-3.002 1.934-2 2.901-4.936 2.901-8.804v-1.401l-8.504 1.5c-6.004 1.068-9.005 3.169-9.005 6.304 0 1.667.7 3.001 2.101 4.002 1.401.934 3.102 1.4 5.103 1.4zM311.077 94.014c-.734 0-1.334-.233-1.801-.7-.467-.467-.7-1.067-.7-1.801V44.518c0-.734.233-1.334.7-1.801.467-.467 1.067-.7 1.801-.7h11.506c.734 0 1.334.266 1.801.8.534.467.8 1.034.8 1.7v4.003c3.669-4.336 8.605-6.503 14.808-6.503h4.402c.734 0 1.334.233 1.801.7.467.467.701 1.067.701 1.8v10.306c0 .667-.234 1.268-.701 1.801-.467.467-1.067.7-1.801.7h-9.705c-2.734 0-4.869.768-6.403 2.302-1.467 1.467-2.201 3.78-2.201 6.515v25.372c0 .733-.267 1.334-.801 1.8-.466.468-1.067.701-1.8.701h-12.407zM382.426 94.034c-13.807 0-20.711-6.57-20.711-19.71V54.988h-7.804c-.734 0-1.367-.233-1.901-.7-.467-.467-.7-1.067-.7-1.801v-8.104c0-.734.233-1.335.7-1.801.534-.467 1.167-.7 1.901-.7h7.804v-17.38c0-.734.233-1.335.7-1.802.534-.466 1.134-.7 1.801-.7h11.606c.734 0 1.334.233 1.801.7.467.467.701 1.068.701 1.801v17.38h12.506c.734 0 1.334.234 1.801.7.534.467.801 1.068.801 1.802v8.104c0 .733-.267 1.334-.801 1.8-.467.468-1.067.701-1.801.701h-12.506v17.935c0 4.936 1.901 7.404 5.703 7.404h7.704c.733 0 1.334.233 1.801.7.466.467.7 1.068.7 1.801v8.705c0 .667-.234 1.267-.7 1.8-.467.468-1.068.701-1.801.701h-9.305zM449.293 94.038c-9.405 0-16.776-2.301-22.112-6.904-5.269-4.602-7.904-11.54-7.904-20.81v-41.78c0-.734.233-1.334.7-1.801.534-.467 1.134-.7 1.801-.7h12.907c.734 0 1.334.233 1.801.7.534.467.8 1.067.8 1.8v41.68c0 4.336 1.001 7.604 3.002 9.805 2.068 2.135 5.036 3.202 8.905 3.202 3.802 0 6.736-1.1 8.804-3.302 2.068-2.201 3.102-5.436 3.102-9.705v-41.68c0-.733.233-1.333.7-1.8.534-.467 1.134-.7 1.801-.7h13.007c.734 0 1.334.233 1.801.7.467.467.7 1.067.7 1.8v41.78c0 9.272-2.668 16.209-8.004 20.811-5.269 4.603-12.54 6.904-21.811 6.904zM495.492 94.034c-.667 0-1.268-.233-1.801-.7-.467-.534-.701-1.134-.701-1.801v-66.99c0-.733.234-1.333.701-1.8.533-.467 1.134-.7 1.801-.7h13.407c.733 0 1.334.233 1.801.7.533.467.8 1.067.8 1.8v66.99c0 .733-.267 1.334-.8 1.8-.467.468-1.068.701-1.801.701h-13.407zM582.961 43.91h-7.017v16.76h-.242l-11.449-16.76h-6.051V73h7.031V56.21h.185L576.995 73h5.966V43.91zM593.674 73l1.918-6.108h10.043L607.552 73h7.557l-9.815-29.09h-9.361L586.118 73h7.556zm3.594-11.449l3.225-10.312h.227l3.239 10.312h-6.691zM613.657 49.62h8.835V73h6.932V49.62h8.821v-5.71h-24.588v5.71zM648.71 43.91h-7.031V73h7.031V43.91zM659.729 43.91h-7.869L661.675 73h9.361l9.815-29.09h-7.869l-6.506 21.306h-.241l-6.506-21.307zM683.983 73h20.284v-5.71h-13.252v-5.98h12.216v-5.725h-12.216V49.62h13.252v-5.71h-20.284V73z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M717 27H546a5 5 0 00-5 5v52a5 5 0 005 5h171a5 5 0 005-5V32a5 5 0 00-5-5zm-171-5c-5.523 0-10 4.477-10 10v52c0 5.523 4.477 10 10 10h171c5.523 0 10-4.477 10-10V32c0-5.523-4.477-10-10-10H546z"
        fill="#000"
      />
      <Defs>
        <LinearGradient
          id="logo-gradient"
          x1={56.5}
          y1={0}
          x2={114.977}
          y2={79.75}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#7DD3FC" />
          <Stop offset={1} stopColor="#0EA5E9" />
        </LinearGradient>
      </Defs>
    </NbSvg>
  );
}

export default Logo;
