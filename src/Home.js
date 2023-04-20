const Home = () => {

    const handleClick = (e) => {
        console.log('hello,', e)
    }
    const handleClickAgain = (name) => {
        console.log('hello,'+ name)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => handleClickAgain('mario')}>Click Me again</button>
        </div>
     );
}
 
export default Home;