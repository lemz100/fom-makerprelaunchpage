import styles from './Button.module.less';

/** 
*/

function Button({ text }) {

  return (
    <button 
        className={styles.button}> 
        {text}
    </button>
  );
}

export default Button;
