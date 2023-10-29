import './style.css';

export const Calendar = ({color}) => {
  return (
    <svg className={"calendar " + color} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Calendar">
        <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M7.96551 1C8.51779 1 8.96551 1.44772 8.96551 2V2.5792H15.0437V2C15.0437 1.44772 15.4914 1 16.0437 1C16.596 1 17.0437 1.44772 17.0437 2V2.61758C18.3659 2.74701 19.534 3.2072 20.4173 4.04924C21.4837 5.06579 22.005 6.51477 22 8.22403V17.3475C22 19.0566 21.4761 20.5066 20.4098 21.5247C19.3506 22.536 17.8829 23 16.229 23H7.77096C6.11648 23 4.64741 22.5259 3.58826 21.4994C2.52413 20.468 2 19.0014 2 17.2719V8.22222C2 6.51163 2.52719 5.06356 3.59524 4.04827C4.47943 3.20776 5.64634 2.74749 6.96551 2.61776V2C6.96551 1.44772 7.41322 1 7.96551 1ZM6.96551 4.63052C6.09021 4.74814 5.4327 5.06103 4.9732 5.49783C4.52217 5.92658 4.18674 6.54608 4.05783 7.40445H19.9452C19.8196 6.54444 19.4864 5.92499 19.0373 5.49686C18.5798 5.06071 17.9226 4.74759 17.0437 4.63019V5.29078C17.0437 5.84306 16.596 6.29078 16.0437 6.29078C15.4914 6.29078 15.0437 5.84306 15.0437 5.29078V4.5792H8.96551V5.29078C8.96551 5.84306 8.51779 6.29078 7.96551 6.29078C7.41322 6.29078 6.96551 5.84306 6.96551 5.29078V4.63052ZM20 9.40445H4V17.2719C4 18.5967 4.39301 19.4941 4.98019 20.0632C5.57235 20.6372 6.48876 21 7.77096 21H16.229C17.5211 21 18.4389 20.6413 19.0286 20.0782C19.6114 19.5218 20 18.6456 20 17.3475V9.40445ZM16.267 11.9198C16.6576 12.3104 16.6576 12.9435 16.267 13.3341L11.521 18.0801C11.1306 18.4705 10.4975 18.4706 10.107 18.0802L7.73298 15.7072C7.34238 15.3168 7.34224 14.6836 7.73269 14.293C8.12313 13.9024 8.75629 13.9023 9.1469 14.2927L10.8138 15.9589L14.8528 11.9198C15.2434 11.5293 15.8765 11.5293 16.267 11.9198Z" fill="current"/>
      </g>
    </svg>
  );
};