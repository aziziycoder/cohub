import "./team.scss";

const Team = ({ team }) => {
    return (
        <div className="team" id="team">
            <div className="top">
                <h1>Meet Our <code>Team</code></h1>
                <p>Expert instructors dedicated to your success</p>
            </div>
            <div className="bottom">
                {team.map((member, index) => (
                    <div className="member card glass-bg" key={index}>
                        {member.img && <img src={member.img} alt={member.name} />}
                        <h2>{member.name}</h2>
                        <h3>{member.role}</h3>
                        <p>{member.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team;