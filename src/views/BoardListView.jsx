import React from 'react';
import BoardType from '@/components/board/BoardType'
import BoardList from '@/components/board/BoardList'
import Title from '@/components/layout/Title'

const BoardListView = () => {
    return (
        <div className="row">
            <Title title="플레이어즈" />
            <BoardType />
            <BoardList />
        </div>
    );
};

export default BoardListView;