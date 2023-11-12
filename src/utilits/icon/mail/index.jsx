import styles from './style.module.css';

export const Mail = ({ color }) => {
  return (
    <svg className={styles.mail + ' ' + color} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 4.25H5C4.20435 4.25 3.44129 4.56607 2.87868 5.12868C2.31607 5.69129 2 6.45435 2 7.25V17.25C2 18.0456 2.31607 18.8087 2.87868 19.3713C3.44129 19.9339 4.20435 20.25 5 20.25H19C19.7956 20.25 20.5587 19.9339 21.1213 19.3713C21.6839 18.8087 22 18.0456 22 17.25V7.25C22 6.45435 21.6839 5.69129 21.1213 5.12868C20.5587 4.56607 19.7956 4.25 19 4.25ZM18.59 6.25L12.71 12.13C12.617 12.2237 12.5064 12.2981 12.3846 12.3489C12.2627 12.3997 12.132 12.4258 12 12.4258C11.868 12.4258 11.7373 12.3997 11.6154 12.3489C11.4936 12.2981 11.383 12.2237 11.29 12.13L5.41 6.25H18.59ZM20 17.25C20 17.5152 19.8946 17.7696 19.7071 17.9571C19.5196 18.1446 19.2652 18.25 19 18.25H5C4.73478 18.25 4.48043 18.1446 4.29289 17.9571C4.10536 17.7696 4 17.5152 4 17.25V7.66L9.88 13.54C10.4425 14.1018 11.205 14.4174 12 14.4174C12.795 14.4174 13.5575 14.1018 14.12 13.54L20 7.66V17.25Z" fill="black" />
    </svg>
  );
};