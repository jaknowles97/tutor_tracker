import React from "react";
import ReactIframeResizer from "react-iframe-resizer-super";

const iframeResizerOptions = { checkOrigin: false };

const TutorForm = props => {
  const baseURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSc_q0CSp5Bpn7lfDAdoPCbBTW-OxWQVhC3gG5P9e6iE4FERjw/viewform";
  const code = `?entry.1626809215=${props.code}`;
  const name = `&entry.1262798942=${props.name}`;
  const email = `&entry.1509111758=${props.email}`;
  const github = `&entry.2097580399=${props.github}`;
  const prefillURL = `${baseURL}${code}${name}${email}${github}`;
  return (
    <ReactIframeResizer
      iframeResizerOptions={iframeResizerOptions}
      src={prefillURL}
      style={{
        width: "60vw",
        display: "flex",
        height: "1200px",
        margin: "30px auto"
      }}
    />
  );
};

export default TutorForm;
