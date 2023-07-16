FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/Devil-08/Secktor-bot /root/DevilTech_BOt
WORKDIR /root/DevilTech_BOt/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
