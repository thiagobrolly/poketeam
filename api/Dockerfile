FROM node

WORKDIR /usr/app

COPY package*.json ./

COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npx prisma generate

COPY entrypoint.sh .

RUN chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]

EXPOSE 3333

CMD ["npm", "run", "dev"]