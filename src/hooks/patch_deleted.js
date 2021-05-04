import { makeCallingParams } from 'feathers-hooks-common';

const patchDeleted = (activeKey = 'active', activeValue = false) => async (context) => {
    const { service, id, params } = context;

    context.result = await service._patch(
        id,
        {
            [activeKey]: activeValue,
        },
        makeCallingParams(
            params,
            {},
            {},
            {
                provider: undefined,
            },
        ),
    );

    return context;
};

export default patchDeleted;