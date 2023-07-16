import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  email: string;
  displayName: string;
  password: string;
  profile: object;
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true },
  displayName: { type: String, required: true },
  password: { type: String, required: true },
  profile: { type: Object }
});

const UserModel = mongoose.model<IUser>('User', userSchema);

export default UserModel;
