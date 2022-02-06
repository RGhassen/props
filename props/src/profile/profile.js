import PropTypes from 'prop-types';
const Profile =({fullName,bio,profession,children,handleName})=>{
    return (
        <div>
            <h1>hi, my name is {fullName}</h1>
            <p>{bio} for now im just a {profession}</p>
            {children}
            <section>
            <button onClick={()=>handleName(fullName)}>alert</button>
            </section>
        </div>
    )
}
Profile.defaultProps={
    fullName : 'user'
}
Profile.propTypes = {
    fullName : PropTypes.string
}
export default Profile