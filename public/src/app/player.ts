export class Player {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  position: string;
  status: object = {
    game1: 'undecided',
    game2: 'undecided',
    game3: 'undecided'
  };
}