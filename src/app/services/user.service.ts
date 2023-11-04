import { Injectable } from '@angular/core';
import * as bcrypt from 'bcrypt';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
  }

  async comparePasswords(
    password: string,
    storedPasswordHash: string
  ): Promise<boolean> {
    return bcrypt.compare(password, storedPasswordHash);
  }
}
