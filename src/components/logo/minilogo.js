import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// @mui
// import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
// routes
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, openNav, sx, ...other }, ref) => {
  // const theme = useTheme();
  
  const logo = (v) => (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: v !== undefined ? 200 : 40,
        height: 40,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
     { openNav ? 
     ( <svg width="100%" height="100%" viewBox="0 0 199 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_47_3185)">
<path d="M25.0532 28.1627C25.0081 27.9616 24.8302 27.8203 24.6242 27.8166C17.643 27.7277 13.5717 24.959 8.58523 19.9994C13.5729 15.041 17.7368 12.2724 24.7205 12.1822C24.9277 12.1797 25.1068 12.036 25.1494 11.8337L27.5671 0.534965C27.6268 0.258347 27.4136 -0.00364845 27.1308 7.29597e-06C16.9581 0.138926 7.40686 4.10907 0.131913 11.2244C-0.0435628 11.3962 -0.0435628 11.6789 0.129476 11.8532L8.27692 20.0006L0.130695 28.1468C-0.0423442 28.3199 -0.0423442 28.6038 0.133132 28.7756C7.40686 35.8909 16.9557 39.8599 27.1272 40C27.4111 40.0037 27.6244 39.7392 27.5622 39.4614L25.0544 28.1627H25.0532Z" fill="white"/>
<path d="M57.9322 25.9851C57.8298 25.8815 57.6641 25.8803 57.5569 25.9778C55.495 27.8605 53.5514 29.0145 50.511 29.0145C45.7195 29.0145 42.1125 25.1369 42.1125 20.003V19.9299C42.1125 17.5001 42.9595 15.2433 44.4924 13.5738C46.051 11.8873 48.1921 10.9538 50.511 10.9538C52.9823 10.9538 55.1063 11.8556 57.3607 13.8663C57.4728 13.9662 57.6446 13.9613 57.7433 13.848C58.2429 13.274 59.6553 11.6509 60.1451 11.0879C60.2414 10.9782 60.2317 10.8137 60.1256 10.715C58.1247 8.85545 55.4 7.03488 50.5488 7.03488C43.1751 7.03488 37.6172 12.6111 37.6172 20.003V20.0701C37.6172 23.5796 38.9052 26.8247 41.2486 29.2228C43.6163 31.6332 46.8553 32.9651 50.3648 32.9651C54.4544 32.9651 57.357 31.7478 60.3023 28.7732C60.4071 28.6672 60.4084 28.4929 60.3036 28.3869L57.9322 25.9839V25.9851Z" fill="white"/>
<path d="M74.6246 7.46991H70.8897C70.7403 7.46991 70.6191 7.59103 70.6191 7.74044V32.2656C70.6191 32.4151 70.7403 32.5362 70.8897 32.5362H74.6246C74.774 32.5362 74.8951 32.4151 74.8951 32.2656V7.74044C74.8951 7.59103 74.774 7.46991 74.6246 7.46991Z" fill="white"/>
<path d="M96.6984 7.46991H87.1045C86.9546 7.46991 86.834 7.59055 86.834 7.74044V32.2656C86.834 32.4155 86.9558 32.5362 87.1045 32.5362H90.8382C90.9881 32.5362 91.1088 32.4155 91.1088 32.2656V24.4265H96.1939C102.273 24.4265 106.206 21.0766 106.206 15.8928V15.8196C106.206 10.7467 102.476 7.46991 96.6972 7.46991H96.6984ZM101.858 16.0036C101.858 18.7394 99.6376 20.5806 96.3365 20.5806H91.11V11.3474H96.3365C99.846 11.3474 101.858 13.0218 101.858 15.9305V16.0036Z" fill="white"/>
<path d="M132.409 7.74044V17.9534H120.225V7.74044C120.225 7.59055 120.105 7.46991 119.955 7.46991H116.214C116.064 7.46991 115.943 7.59055 115.943 7.74044V32.2656C115.943 32.4155 116.065 32.5362 116.214 32.5362H119.955C120.105 32.5362 120.225 32.4155 120.225 32.2656V21.9052H132.409V32.2656C132.409 32.4155 132.531 32.5362 132.679 32.5362H136.419C136.569 32.5362 136.69 32.4155 136.69 32.2656V7.74044C136.69 7.59055 136.569 7.46991 136.419 7.46991H132.679C132.53 7.46991 132.409 7.59055 132.409 7.74044Z" fill="white"/>
<path d="M152.648 28.7269V21.8005H165.027C165.177 21.8005 165.298 21.6798 165.298 21.5299V18.2617C165.298 18.1118 165.177 17.9912 165.027 17.9912H152.648V11.2804H166.647C166.797 11.2804 166.917 11.1598 166.917 11.0099V7.74166C166.917 7.59177 166.797 7.47113 166.647 7.47113H148.644C148.494 7.47113 148.373 7.59177 148.373 7.74166V32.2669C148.373 32.4168 148.495 32.5374 148.644 32.5374H166.831C166.981 32.5374 167.101 32.4168 167.101 32.2669V28.9986C167.101 28.8487 166.981 28.7281 166.831 28.7281H152.648V28.7269Z" fill="white"/>
<path d="M191.983 23.0215L192.088 22.991C195.909 21.887 198.013 19.2 198.013 15.4273V15.3541C198.013 13.2192 197.296 11.3548 195.946 9.96801C194.271 8.33632 191.774 7.47113 188.719 7.47113H177.825C177.675 7.47113 177.555 7.59177 177.555 7.74166V32.2669C177.555 32.4168 177.677 32.5374 177.825 32.5374H181.565C181.715 32.5374 181.836 32.4168 181.836 32.2669V23.7465H187.498L187.523 23.777L193.638 32.457C193.673 32.5069 193.731 32.5374 193.794 32.5374H198.299C198.495 32.5374 198.609 32.3156 198.496 32.1548L191.984 23.0227L191.983 23.0215ZM181.836 19.9726V11.3474H188.364C191.732 11.3474 193.664 12.8999 193.664 15.6052V15.6783C193.664 18.2861 191.596 19.9726 188.394 19.9726H181.836Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_813_2875">
<rect width="36" height="36" fill="white" />
</clipPath>
</defs>
</svg>)
:(  <svg width="100%" height="100%" viewBox="0 0 28 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clipPath="url(#clip0_47_3185)">
<path d="M8.64301 20.153L0.34122 11.8538C0.16751 11.6801 0.16751 11.3975 0.34122 11.2263C7.6189 4.10942 17.1678 0.137419 27.3415 6.35665e-06C27.6241 -0.00517902 27.8367 0.259275 27.7771 0.5341L25.3607 11.833C25.3166 12.0353 25.1377 12.1779 24.9303 12.1831C17.873 12.2738 13.6962 15.0972 8.64042 20.153" fill="white"/>
<path d="M27.3363 40C17.1652 39.86 7.6163 35.8906 0.341211 28.7763C0.164909 28.6051 0.164909 28.3199 0.341211 28.1488L8.64041 19.8496C13.6987 24.908 17.7796 27.7288 24.8343 27.8196C25.0392 27.8221 25.2181 27.9647 25.2621 28.1644L27.7693 39.4633C27.8315 39.7407 27.6189 40.0052 27.3337 40.0026" fill="white"/>
</g>
<defs>
<clipPath id="clip0_813_2107">
<rect width="27.5758" height="40" fill="white" />
</clipPath>
</defs>
</svg>)}
      {/* <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_47_3185)">
          <path
            d="M24.2109 10.6821C24.1944 10.743 24.1786 10.7876 24.1707 10.8337C23.9004 12.4177 23.1215 13.6904 21.834 14.6517C21.0552 15.2328 20.1767 15.5929 19.212 15.7286C17.7 15.9413 16.2939 15.6484 15.0277 14.7926C13.6352 13.851 12.7909 12.5371 12.4972 10.8789C12.3034 9.78453 12.4129 8.71404 12.8274 7.68487C13.3795 6.31341 14.315 5.28583 15.6339 4.60212C15.9932 4.41607 16.3741 4.28532 16.7542 4.15169C17.3734 3.93439 18.0148 3.82409 18.6625 3.73725C19.5503 3.61817 20.4412 3.58793 21.3345 3.63055C22.5962 3.69036 23.8447 3.91444 25.0485 4.29713C27.193 4.97709 29.0833 6.08921 30.7197 7.63346C31.9107 8.75666 32.8762 10.0508 33.6429 11.4973C34.1461 12.4477 34.5169 13.4486 34.8493 14.4664C35.1813 15.489 35.4061 16.5432 35.5202 17.6122C35.6086 18.4233 35.6381 19.2398 35.6086 20.0552C35.515 22.6904 34.7743 25.262 33.4518 27.5432C32.2953 29.5365 30.7833 31.2073 28.9158 32.5554C27.7977 33.3627 26.5796 34.0214 25.292 34.5151C24.0692 34.9855 22.806 35.3019 21.5147 35.5087C20.4985 35.6713 19.4741 35.7313 18.4452 35.7103C18.2877 35.707 18.1305 35.6926 17.9731 35.6756C18.3043 35.6232 18.6355 35.5761 18.9648 35.5172C20.8224 35.187 22.6117 34.6435 24.2948 33.7824C25.706 33.0601 27.0098 32.1738 28.2145 31.142C28.7983 30.6421 29.372 30.131 29.8885 29.5609C30.9469 28.3919 31.7541 27.0181 32.2602 25.5245C32.7663 24.0309 32.9605 22.4494 32.8307 20.8777C32.6716 18.9727 32.0812 17.2093 31.0491 15.6C30.0411 14.0278 28.7256 12.7758 27.1027 11.8442C26.2573 11.3582 25.3532 10.9826 24.4123 10.7266C24.3485 10.7097 24.284 10.6984 24.2109 10.6821Z"
            fill="#2292F9"
          />
          <path
            d="M2.35828 10.341C2.30471 10.5402 2.25575 10.7244 2.20564 10.9083C1.94722 11.8571 1.75637 12.823 1.63454 13.7988C1.50299 14.8517 1.45047 15.913 1.47743 16.9737C1.503 17.9908 1.60282 19.0047 1.77609 20.0072C1.85586 20.4703 1.91318 20.9379 2.01153 21.3968C2.40321 23.2226 3.20169 24.8541 4.3907 26.2928C5.03006 27.0668 5.7659 27.7367 6.57763 28.3274C7.74647 29.1782 9.04694 29.7376 10.4394 30.0959C11.4491 30.3551 12.4779 30.4621 13.5191 30.4385C14.4726 30.417 15.4093 30.273 16.3318 30.0306C17.5694 29.7069 18.7375 29.16 19.7788 28.417C20.3278 28.027 20.8521 27.6083 21.328 27.1309C21.3585 27.1004 21.3882 27.0691 21.4167 27.0366C21.4258 27.0264 21.4294 27.0114 21.4429 26.9832C21.4039 26.9437 21.3643 26.8979 21.3188 26.8589C20.5456 26.1965 19.9692 25.3934 19.6067 24.4397C19.2975 23.6349 19.1703 22.7716 19.2344 21.9118C19.3327 20.5628 19.8265 19.3774 20.7282 18.372C21.6766 17.3147 22.8613 16.6745 24.2685 16.4723C25.8 16.2523 27.2223 16.5689 28.5009 17.4414C29.5635 18.1665 30.2993 19.1571 30.7299 20.3707C30.9983 21.1273 31.0925 21.9095 31.0467 22.7084C31.0216 23.1502 30.9515 23.5868 30.8146 24.0084C30.6011 24.6651 30.3834 25.3208 30.1134 25.9573C29.6066 27.157 28.9423 28.2838 28.138 29.3082C26.9027 30.8805 25.4088 32.1482 23.6565 33.1112C22.4433 33.78 21.1578 34.2608 19.8065 34.5671C18.4399 34.877 17.0561 34.9825 15.6593 34.9012C14.0373 34.8065 12.4677 34.4608 10.9675 33.8338C9.62826 33.274 8.34177 32.6085 7.15334 31.7673C5.38384 30.5135 3.88514 28.916 2.74673 27.0702C1.60831 25.2243 0.853537 23.168 0.527464 21.024C0.369708 19.9891 0.312273 18.9413 0.35596 17.8953C0.40996 16.5911 0.620776 15.3115 0.97516 14.0549C1.16553 13.3809 1.3451 12.7036 1.59292 12.0482C1.78962 11.5282 2.0085 11.0166 2.21932 10.5019C2.24438 10.4412 2.27073 10.3772 2.35828 10.341Z"
            fill="#2292F9"
          />
          <path
            d="M32.3012 7.71137C32.0905 7.51682 31.882 7.32026 31.6689 7.12802C30.6697 6.22076 29.5843 5.41326 28.428 4.71703C26.9627 3.83186 25.4099 3.14455 23.7748 2.63868C23.2389 2.47265 22.7065 2.29596 22.1579 2.17399C21.1967 1.9591 20.2119 1.86927 19.2277 1.90673C17.1904 1.98521 15.2975 2.55127 13.5661 3.63055C11.6688 4.81356 10.2359 6.41517 9.2674 8.4354C8.82791 9.34879 8.52278 10.3057 8.33716 11.301C8.25191 11.7582 8.18697 12.2196 8.17401 12.6854C8.16234 13.1073 8.14147 13.5306 8.15961 13.9515C8.19307 14.7427 8.31179 15.528 8.51371 16.2938C8.53099 16.3587 8.54812 16.4234 8.56742 16.4877C8.57116 16.5003 8.58455 16.5099 8.59708 16.5252C8.7683 16.4656 8.93879 16.4032 9.11116 16.3466C11.2058 15.6597 13.5518 16.1946 15.127 17.7698C16.0835 18.7261 16.6491 19.8751 16.8238 21.2167C17.133 23.6226 15.968 25.9487 13.8624 27.1351C13.1563 27.5328 12.3988 27.7819 11.5893 27.857C9.72599 28.0298 8.11953 27.4667 6.76987 26.1677C6.62155 26.0237 6.45681 25.8966 6.31914 25.7441C6.05879 25.4561 5.79772 25.166 5.56329 24.857C4.79562 23.8464 4.19169 22.7418 3.70972 21.5686C3.46492 20.9726 3.29702 20.3521 3.11226 19.7369C2.92017 19.0977 2.76666 18.4496 2.66586 17.7895C2.58119 17.2344 2.51092 16.6772 2.50401 16.1151C2.49825 15.6399 2.48874 15.1647 2.51351 14.6902C2.58484 13.347 2.84736 12.0208 3.29313 10.7518C3.90959 8.98533 4.84156 7.40263 6.07233 5.99661C6.83121 5.12945 7.6906 4.37201 8.63553 3.71119C9.26063 3.27372 9.8843 2.83452 10.5477 2.45465C11.9562 1.64656 13.4783 1.05515 15.0628 0.700294C15.8404 0.525478 16.6287 0.414886 17.4236 0.35239C17.476 0.348214 17.529 0.349654 17.582 0.349654C18.158 0.349654 18.734 0.357142 19.31 0.347206C19.8354 0.338134 20.3541 0.399622 20.8722 0.468454C21.5473 0.559437 22.2155 0.695485 22.8724 0.875686C24.04 1.19239 25.1683 1.63964 26.2358 2.20898C28.2777 3.2982 29.9997 4.76613 31.425 6.58658C31.6853 6.91922 31.9578 7.2425 32.2239 7.5701C32.2564 7.61013 32.2885 7.6506 32.3208 7.69077L32.3012 7.71137Z"
            fill="#2292F9"
          />
        </g>
        <path
          d="M51.758 11.17C56.416 11.17 58.762 14.23 59.272 16.61H55.362C54.852 15.318 53.628 14.4 51.724 14.4C48.97 14.4 46.998 16.406 46.998 19.84C46.998 22.934 48.902 25.314 51.86 25.314C53.968 25.314 55.056 24.124 55.6 22.866H59.544C58.66 25.824 56.314 28.578 51.792 28.578C46.896 28.578 43.088 25.076 43.088 19.806C43.088 15.046 46.42 11.17 51.758 11.17ZM72.6298 11.306V14.842C72.1538 14.774 71.5758 14.672 70.7258 14.672C68.1418 14.672 66.6118 16.372 66.6118 19.772V28H62.8038V11.714H66.5438V14.026H66.6458C67.3938 12.632 69.0258 11.204 71.2018 11.204C71.8138 11.204 72.2218 11.238 72.6298 11.306ZM90.8721 11.714V28H87.1661V25.926H87.0641C85.9421 27.32 84.1741 28.578 81.4881 28.578C77.8161 28.578 73.6681 25.654 73.6681 19.84C73.6681 14.672 77.3401 11.204 81.7601 11.204C84.4801 11.204 86.1121 12.632 87.0981 13.924H87.1661V11.714H90.8721ZM77.5781 19.84C77.5781 22.56 79.1421 25.246 82.5081 25.246C85.0241 25.246 87.3361 23.07 87.3361 19.942C87.3361 16.644 85.1941 14.468 82.5421 14.468C79.1761 14.468 77.5781 17.188 77.5781 19.84ZM111.392 3.52V28H107.686V26.062H107.584C106.496 27.32 104.626 28.578 101.94 28.578C98.2676 28.578 94.1876 25.654 94.1876 19.84C94.1876 14.74 97.7576 11.17 102.144 11.17C104.83 11.17 106.36 12.292 107.55 13.754H107.652V3.52H111.392ZM98.0976 19.84C98.0976 22.56 99.6956 25.246 102.994 25.246C105.578 25.246 107.856 23.07 107.856 19.942C107.856 16.644 105.714 14.434 103.028 14.434C99.7296 14.434 98.0976 17.188 98.0976 19.84ZM131.911 11.714V28H128.205V25.926H128.103C126.981 27.32 125.213 28.578 122.527 28.578C118.855 28.578 114.707 25.654 114.707 19.84C114.707 14.672 118.379 11.204 122.799 11.204C125.519 11.204 127.151 12.632 128.137 13.924H128.205V11.714H131.911ZM118.617 19.84C118.617 22.56 120.181 25.246 123.547 25.246C126.063 25.246 128.375 23.07 128.375 19.942C128.375 16.644 126.233 14.468 123.581 14.468C120.215 14.468 118.617 17.188 118.617 19.84ZM146.175 11.306V14.842C145.699 14.774 145.121 14.672 144.271 14.672C141.687 14.672 140.157 16.372 140.157 19.772V28H136.349V11.714H140.089V14.026H140.191C140.939 12.632 142.571 11.204 144.747 11.204C145.359 11.204 145.767 11.238 146.175 11.306ZM145.906 28V23.41H150.7V28H145.906ZM170.925 11.714V28H167.219V25.926H167.117C165.995 27.32 164.227 28.578 161.541 28.578C157.869 28.578 153.721 25.654 153.721 19.84C153.721 14.672 157.393 11.204 161.813 11.204C164.533 11.204 166.165 12.632 167.151 13.924H167.219V11.714H170.925ZM157.631 19.84C157.631 22.56 159.195 25.246 162.561 25.246C165.077 25.246 167.389 23.07 167.389 19.942C167.389 16.644 165.247 14.468 162.595 14.468C159.229 14.468 157.631 17.188 157.631 19.84ZM175.362 28V11.714H179.17V28H175.362ZM175.158 8.11V4.234H179.374V8.11H175.158Z"
          fill="white"
        />
        <defs>
          <clipPath id="clip0_47_3185">
            <rect width="36" height="36" fill="white" />
          </clipPath>
        </defs>
      </svg> */}
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo(openNav)}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
  openNav: PropTypes.bool,
};

export default Logo;