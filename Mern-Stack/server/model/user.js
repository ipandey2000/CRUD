import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const userSchema = mongoose.Schema({
    FirstName = (String),
    LastName = (String),
    Email = (String),
    Mobile = (String),
    Gender =(String),
    Designation = (String),
    DateOfJoining = (Date),
    ReportingManager =  (String),
    Salary =(Number),
    EmployeeCode =(Number),
    Location =(String),
    State = (String),
    Country = (String),
    Department = (String),
    DeletedAt (Date),
});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'user');
// we need to turn it into a model
const postUser = mongoose.model('user', userSchema);

export default postUser;