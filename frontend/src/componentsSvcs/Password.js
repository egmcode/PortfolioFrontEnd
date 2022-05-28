export const checkPW = (passwordOne, passwordTwo) =>
{
    if((passwordOne.length < 8) && !(passwordOne === passwordTwo))
    {
        return ({status: "passwords must match and be at least 8 characters", valid: false})
    }
    else if((passwordOne.length < 8) && (passwordOne === passwordTwo))
    {
        return ({status: "passwords must be at least 8 characters", valid: false})
    }
    else if((passwordOne.length >= 8) && !(passwordOne === passwordTwo))
    {
        return ({status: "passwords must match", valid: false})
    }
    else
    {
        return ({status: "", valid: true})
    }
}