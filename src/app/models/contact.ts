// Contact Class
export class Contact  {
    constructor(
        public id: number,
        public contactFullName: string,
        public contactEmail: string,
        public contactSubject: string,
        public contactMessage: string
    ) {}
}