import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';
import { validateRequest, BadRequestError } from '@butickets/common';

import { User } from '../models/user';

const router = express.Router();

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new BadRequestError('Email in use');
    }

    const user = User.build({ email, password });
    await user.save();

    // GenerateJWT
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      // TODO: We have set thıs value manually using kubectl... command
      // Instead, we can use a config file including different env variables
      process.env.JWT_KEY!
    );

    //Store JWT on session object
    if (!!req.session) req.session.jwt = userJwt;

    res.status(201).send(user);
  }
);

export { router as signupRouter };
