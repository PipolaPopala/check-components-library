import './style.css';

export const Search = ({color}) => {
  return (
    <svg className={"search " + color} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.156 6.25C8.44639 6.25 6.24979 8.4466 6.24979 11.1562C6.24979 13.8659 8.44639 16.0625 11.156 16.0625C13.8657 16.0625 16.0623 13.8659 16.0623 11.1562C16.0623 8.4466 13.8657 6.25 11.156 6.25ZM4.24979 11.1562C4.24979 7.34203 7.34182 4.25 11.156 4.25C14.9703 4.25 18.0623 7.34203 18.0623 11.1562C18.0623 12.7028 17.5539 14.1306 16.6952 15.2817L19.4565 18.043C19.847 18.4335 19.847 19.0667 19.4565 19.4572C19.066 19.8477 18.4328 19.8477 18.0423 19.4572L15.2809 16.6959C14.1299 17.5543 12.7023 18.0625 11.156 18.0625C7.34182 18.0625 4.24979 14.9705 4.24979 11.1562Z" fill="current"/>
    </svg>
  );
};


