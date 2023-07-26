const sectionWrapper = (Component, id) =>

    function HOC() {
        return (
            <section id={id} className='scroll-my-24 my-10'>
                <Component />
            </section>)
    }
export default sectionWrapper