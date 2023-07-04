import { TextureLoader } from 'three'

import {dirtImg, glassImg, grassImg, logImg, woodImg} from './images'

const dirtTexture = new TextureLoader().load(dirtImg);
const glassTexture = new TextureLoader().load(glassImg);
const grassTexture = new TextureLoader().load(grassImg);
const woodTexture = new TextureLoader().load(woodImg);
const logTexture = new TextureLoader().load(logImg);
const groundTexture = new TextureLoader().load(grassImg);

export {
    dirtTexture,
    glassTexture,
    grassTexture,
    woodTexture,
    logTexture,
    groundTexture
}