import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const CastList = (props) => {
    const { category } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, props.id);
            const fullCasts = res.cast;

            setCasts(fullCasts.slice(0, 8));
            if (window.matchMedia('screen and (max-width: 645px)').matches) {
                setCasts(fullCasts.slice(0, 6));
            }
            else if (window.matchMedia('screen and (max-width: 786px)').matches) {
                setCasts(fullCasts.slice(0, 8));
            }
        };

        getCredits();
    }, [category, props.id]);

    return (
        <div className="casts">
            {casts.map((item, i) => (
                <div key={i} className="casts__item">
                    <div
                        className="casts__item__img"
                        style={{
                            backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
                        }}
                    ></div>
                    <p className="casts__item__name">{item.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CastList;
