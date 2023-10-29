import './style.css';

export const Ticket = ({color}) => {
  return (
    <svg className={"ticket " + color} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Ticket Star">
        <path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M1.00104 7.25647C1.00126 4.89299 2.93778 3 5.29892 3H18.7011C21.0622 3 22.9987 4.89298 22.999 7.25645C22.999 7.25632 22.999 7.25659 22.999 7.25645L23 9.84999C23.0001 10.1153 22.8948 10.3697 22.7072 10.5574C22.5197 10.745 22.2653 10.8504 22 10.8504C21.3354 10.8504 20.8233 11.3738 20.8233 12.001C20.8233 12.6277 21.3348 13.1506 22 13.1506C22.5523 13.1506 23 13.5984 23 14.1506V16.7431C23 19.1066 21.0646 21 18.7021 21H5.29787C2.93535 21 1 19.1066 1 16.7431V14.1506C1 13.5984 1.44772 13.1506 2 13.1506C2.66522 13.1506 3.17668 12.6277 3.17668 12.001C3.17668 11.4253 2.71822 10.9349 2 10.9349C1.73472 10.9349 1.4803 10.8294 1.29276 10.6418C1.10521 10.4542 0.999897 10.1997 1 9.93446L1.00104 7.25647ZM5.29892 5C4.01813 5 3.00104 6.0217 3.00104 7.25686L3.00033 9.0865C4.23724 9.47249 5.17668 10.5642 5.17668 12.001C5.17668 13.4051 4.26069 14.5788 3 14.9918V16.7431C3 17.9785 4.01625 19 5.29787 19H12.8496V17.7598C12.8496 17.2075 13.2973 16.7598 13.8496 16.7598C14.4019 16.7598 14.8496 17.2075 14.8496 17.7598V19H18.7021C19.9837 19 21 17.9785 21 16.7431V14.9918C19.7393 14.5788 18.8233 13.4051 18.8233 12.001C18.8233 10.5975 19.7389 9.42282 20.9997 9.00941L20.999 7.25726C20.999 6.0221 19.9819 5 18.7011 5H14.8496V6.67C14.8496 7.22228 14.4019 7.67 13.8496 7.67C13.2973 7.67 12.8496 7.22228 12.8496 6.67V5H5.29892ZM13.8496 8.5033C14.4019 8.5033 14.8496 8.95102 14.8496 9.5033V14.3243C14.8496 14.8766 14.4019 15.3243 13.8496 15.3243C13.2973 15.3243 12.8496 14.8766 12.8496 14.3243V9.5033C12.8496 8.95102 13.2973 8.5033 13.8496 8.5033Z" fill="current"/>
      </g>
    </svg>
  );
};
