const Headshot = ({ imageSource, name, position, brief, ...props }) => {
    return (
        <div className="headshot-item-container">
            <img classname="headshot-image" src={imageSource} alt="Headshot of team member" />
            <h4>{name}</h4>
            <span>{position}</span>

            <p>{brief}</p>

        </div>
    )
}

export default Headshot