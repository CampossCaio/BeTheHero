import knex from 'knex';
import configutation from '../../knexfile';

const connection = knex(configutation.development);

export default connection;
