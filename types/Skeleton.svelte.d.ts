/// <reference types="svelte" />
import type { SvelteComponentTyped } from 'svelte'

export interface ImageProps {
	/**
	 * @default "#F5F5F7"
	 */
	secondaryColor: string

	/**
	 * @default "#EBECEF"
	 */
	primaryColor: string

	/**
	 * @default 200
	 */
	height: string | number

	/**
	 * @default 400
	 */
	width: string | number

	/**
	 * @default 2
	 */
	speed: number

	/**
	 * @default true
	 */
	animate: boolean

	/**
	 * @default 100
	 */
	secondaryColorPercentWidth: number

	/**
	 * @default null
	 */
	ariaLabel: string | null | undefined
}

export default class Image extends SvelteComponentTyped<ImageProps, {}, {}> {}
