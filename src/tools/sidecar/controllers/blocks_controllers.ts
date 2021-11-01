import { JsonRequest } from "../request";


export class BlocksController {

    async getById(id: string) {
        return (
            await new JsonRequest()
                .url(`${SIDECAR_LOCALHOST}/blocks/${id}`)
                .send())
            .body
    }

}