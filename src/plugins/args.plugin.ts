import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

export const yarg = yargs(process.argv)
	.option('b', {
		alias: 'base',
		type: 'number',
		demandOption: true,
		describe: 'Multiplication table base'
	}).option('l', {
		alias: 'limit',
		type: 'number',
		default: 10,
		describe: 'Limit of multiplication table'
	}).option('s', {
		alias: 'show',
		type: 'boolean',
		default: false,
		describe: 'Show the multiplication table'
	})
	.parseSync()