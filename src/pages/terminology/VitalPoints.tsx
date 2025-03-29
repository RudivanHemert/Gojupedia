import React from 'react';
import InteractiveVitalPoints from '@/components/theory/InteractiveVitalPoints';

const VitalPoints = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="space-y-8">
        <section>
          <p className="text-muted-foreground mb-4">Interactive diagram of pressure points and vital areas in martial arts (急所 - Kyūsho).</p>
          <InteractiveVitalPoints />
        </section>

        <section className="space-y-4">
          <div className="border border-muted rounded-md mb-2 overflow-hidden">
            <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
              Front View Points
            </div>
            <div className="px-4 py-2 bg-card">
              <div className="grid gap-2 p-2">
                <div>1. Shomon (頭門) - Skull</div>
                <div>2. Kasumi (霞) - Temple</div>
                <div>3. Komekami (米上) - Cheekbone</div>
                <div>4. Jinchu (人中) - Philtrum</div>
                <div>5. Kakon (下根) - Chin</div>
                <div>6. Murasame (村雨) - Clavicle</div>
                <div>7. Hichu (臂中) - Windpipe</div>
                <div>8. Danchu (檀中) - Breastbone</div>
                <div>9. Ude-narashi (腕鳴) - Upper arm</div>
                <div>10. Ganka (眼下) - Ribs under nipple</div>
                <div>11. Suigetsu (水月) - Solar Plexus</div>
                <div>12. Denko (電光) - Ribs</div>
                <div>13. Soto shakutaku (外尺澤) - Outer wrist</div>
                <div>14. Shuko (手甲) - Back of hand</div>
                <div>15. Kokotsu (虎骨) - Shinbone</div>
                <div>16. Soin (足陰) - Instep</div>
                <div>17. Kori (虎離) - Area around toes</div>
                <div>18. Uto (鳥頭) - Bridge of nose</div>
                <div>19. Kasumi (霞) - Temple</div>
                <div>20. Seimo (生毛) - Eye socket</div>
                <div>21. Mikazuki (三日月) - Jaw</div>
                <div>22. Kyosen (胸仙) - Sternum</div>
                <div>23. Uchi shakutaku (内尺澤) - Inner wrist</div>
                <div>24. Ganka (眼下) - Ribs</div>
                <div>25. Hijitsume (肘詰) - Inside of elbow</div>
                <div>26. Inazuma (稲妻) - Stomach wall</div>
                <div>27. Myosho (明衝) - Navel area</div>
                <div>28. Tanden (丹田) - Power center</div>
                <div>29. Kinteki (金的) - Groin</div>
                <div>30. Yako (野狐) - Inner thigh</div>
                <div>31. Fukuto (伏兎) - Hollow of knee</div>
                <div>32. Naira (内羅) - Achilles tendon</div>
                <div>33. Kori (虎離) - Area around toes</div>
              </div>
            </div>
          </div>

          <div className="border border-muted rounded-md mb-2 overflow-hidden">
            <div className="bg-muted/30 px-4 py-3 text-sm font-medium text-secondary-foreground">
              Back View Points
            </div>
            <div className="px-4 py-2 bg-card">
              <div className="grid gap-2 p-2">
                <div>1. Shuko (手甲) - Back of hand</div>
                <div>2. Soto shakutaku (外尺澤) - Outer wrist</div>
                <div>3. Ude-narashi (腕鳴) - Upper arm</div>
                <div>4. Wakigake (脇掛) - Under armpit</div>
                <div>5. Ushiro denko (後電光) - Kidney area</div>
                <div>6. Ushiro denko (後電光) - Kidney area</div>
                <div>7. Bitei (尾締) - Coccyx</div>
                <div>8. Ein (営陰) - Lower back</div>
                <div>9. Ushiro inazuma (後稲妻) - Backside</div>
                <div>10. Soma (相馬) - Calves</div>
                <div>11. Shomon (頭門) - Skull</div>
                <div>12. Dokusen (独仙) - Side of neck</div>
                <div>13. Keichu (鶏冲) - Back of neck</div>
                <div>14. Hayauchi (早打) - Upper back</div>
                <div>15. Kassatsu (活殺) - Spine, middle of back</div>
                <div>16. Ude-narashi (腕鳴) - Upper arm</div>
                <div>17. Hijitsume (肘詰) - Inside of elbow</div>
                <div>18. Uchi shakutaku (内尺澤) - Inner wrist</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VitalPoints;