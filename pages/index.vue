<template>
    <UiBanner/>
    <LayoutSection>
        <div class="grid grid-cols-2 gap-x-5 ">
            <UiListCard>
                <template #title>
                    캠핑장목록
                </template>
            </UiListCard>
            <UiListCard>
                <template #title>
                    편의시설목록
                </template>
            </UiListCard>
        </div>
    </LayoutSection>
    <LayoutSection>
         <div class="grid grid-cols-2 gap-x-5">
            <UiListCard>
                <template #title>
                    캠핑장후기
                </template>
            </UiListCard>
            <UiListCard>
                <template #title>
                    관련뉴스
                </template>
            </UiListCard>
        </div>
    </LayoutSection>
</template>