const withZooBoxEmpty = (Component) => (props) => 
    //ir returniname atsakyma priklausomai ar tuscias masyvas ar ne
    !props.zooList.length
        ? <h6 style={{ color: 'lightblue' }}>No animals in this ZOO (Tuščias masyvas)</h6>
        : <Component {...props} />

export default withZooBoxEmpty;
 