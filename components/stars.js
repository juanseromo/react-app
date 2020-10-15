import styles from '../components/stars.module.css'

function Star(props) {
    return <button className={styles.butt}> {props.icon}</button>;
}

//if i click on the star no. 1 the rest should be turned off,
// if I click on the star 5 all of them should change to On.
//for each star - event listener - replace icon value - 
//with empty star or gold star
//if click on star No. `${Star.length[i]} update the rest's value` 
  
export default function StarGroup() {
     //each star should be a submit button which submits
    //a form saying whether the value was 1,2,3,4 or 5.
    //if value clicked is N send N through the form.
    return (
      <div className={styles.flex}>
        <Star icon={"⭐️"} />
        <Star icon="⭐️" />
        <Star icon="⭐️" />
        <Star icon="⭐️" />
        <Star icon="⭐️" />
      </div>
    );
}
  
/* ReactDOM.render(
    <App />,
    document.getElementById('root')
); */