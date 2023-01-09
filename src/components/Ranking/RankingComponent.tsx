import React from 'react';
import styled from 'styled-components';
import { MainWrapper } from '../../entities/CommonComponents';
import { useAppSelector } from '../../tools/hooks';

const RankingPlace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60vw;
  border-bottom: 1px dotted;
  margin-bottom: 1em;
`;

export const RankingComponent = () => {
  const ranking = useAppSelector((state) => {
    return state.ranking.slice(0, 10);
  });
  const sortedRanking = ranking.sort((a: any, b: any) => {
    return b.credits - a.credits;
  });

  return (
    <MainWrapper>
      <h1>RANKING</h1>
      <div>
        {ranking.length > 0 && (
          <>
            {sortedRanking.map((el: any, id: number) => (
              <>
                {id < ranking.length && (
                  <RankingPlace>
                    <>
                      <h4>
                        {`${id + 1}. ${
                          el.email
                            ? el.email.substring(0, 6) +
                              '*'.repeat(el.email.length - 3)
                            : ''
                        } `}
                      </h4>
                      <h4>Credits: {Math.round(el.credits * 100) / 100}</h4>
                    </>
                  </RankingPlace>
                )}
              </>
            ))}
          </>
        )}
      </div>
    </MainWrapper>
  );
};
