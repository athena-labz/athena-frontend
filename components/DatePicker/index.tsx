import React, { HTMLAttributes } from "react";
import ReactDatePicker from "react-datepicker";
import { chakra, useColorMode } from "@chakra-ui/react";

import "react-datepicker/dist/react-datepicker.css";

const DatePicker = chakra(ReactDatePicker);

// import styles from "../../styles/DatePicker.module.css";

// interface Props {
//   isClearable?: boolean;
//   onChange: (date: Date) => any;
//   selectedDate: Date;
//   showPopperArrow?: boolean;
// }

// const DatePicker = ({
//   selectedDate,
//   onChange,
//   isClearable = false,
//   showPopperArrow = false,
//   ...props
// }: Props) => {
//   const isLight = useColorMode().colorMode === "light"; //you can check what theme you are using right now however you want
//   return (
//     // if you don't want to use chakra's colors or you just wwant to use the original ones,
//     // set className to "light-theme-original" ↓↓↓↓
//     <div className={isLight ? "light-theme local" : "dark-theme local"}>
//       <p className="beep">Test</p>
//       <ReactDatePicker
//         selected={selectedDate}
//         onChange={onChange}
//         isClearable={isClearable}
//         showPopperArrow={showPopperArrow}
//         __css={styles}
//         className="react-datapicker__input-text" //input is white by default and there is no already defined class for it so I created a new one
//         {...props}
//       />
//     </div>
//   );
// };

export default DatePicker;
