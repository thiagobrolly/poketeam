FROM node

WORKDIR /opt

COPY package.json ./

# generated prisma files
COPY prisma ./prisma/

COPY .env ./

COPY tsconfig.json ./

RUN npm install

COPY . .

# Gere o cliente Prisma
RUN npx prisma generate

# Compile o código TypeScript, se necessário
RUN npm run build

EXPOSE 3333

CMD ["npm", "run", "dev"]