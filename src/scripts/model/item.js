import {EventDispatcher, Vector2, Vector3} from 'three';
import {Configuration,configWallThickness,configWallHeight} from '../core/configuration.js';

/**
 * An Item is the basic element.
 *
 */
export class Item extends EventDispatcher
{
	/**
	 * Constructs a new wall.
	 * @param start Start corner.
	 */
	constructor(name, xpos, ypos, zpos, module_url)
	{
		super();
		this.name = name;
		this.xpos = xpos;
		this.ypos = ypos;

		this.item_type = 1;
		this.module_url = module_url || '';
		this.position2D = new Vector2(xpos, ypos);
		this.position3D = new Vector3(xpos, ypos, zpos);
	}
}
