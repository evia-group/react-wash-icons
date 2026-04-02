import type { ComponentType } from 'react';
import type { WashIconProps } from './types';
import { BleachingNonChlorine } from './icons/bleaching-non-chlorine';
import { BleachingNotAllowed } from './icons/bleaching-not-allowed';
import { Bleaching } from './icons/bleaching';
import { CustomDetergent } from './icons/custom-detergent';
import { CustomDrop } from './icons/custom-drop';
import { CustomDryingMachine2 } from './icons/custom-drying-machine-2';
import { CustomIron } from './icons/custom-iron';
import { CustomLaundryBasketFull } from './icons/custom-laundry-basket-full';
import { CustomLaundryBasket } from './icons/custom-laundry-basket';
import { CustomPants } from './icons/custom-pants';
import { CustomTShirt } from './icons/custom-t-shirt';
import { CustomWashingMachine2 } from './icons/custom-washing-machine-2';
import { CustomWashingMachine } from './icons/custom-washing-machine';
import { DrycleaningA } from './icons/drycleaning-a';
import { DrycleaningF2 } from './icons/drycleaning-f-2';
import { DrycleaningF } from './icons/drycleaning-f';
import { DrycleaningLowHeat } from './icons/drycleaning-low-heat';
import { DrycleaningNoSteam } from './icons/drycleaning-no-steam';
import { DrycleaningNotAllowed } from './icons/drycleaning-not-allowed';
import { DrycleaningP2 } from './icons/drycleaning-p-2';
import { DrycleaningP } from './icons/drycleaning-p';
import { DrycleaningReducedMoisture } from './icons/drycleaning-reduced-moisture';
import { DrycleaningShortCycle } from './icons/drycleaning-short-cycle';
import { DrycleaningW2 } from './icons/drycleaning-w-2';
import { DrycleaningW3 } from './icons/drycleaning-w-3';
import { DrycleaningW } from './icons/drycleaning-w';
import { DrycleaningWetcleanNotAllowed } from './icons/drycleaning-wetclean-not-allowed';
import { Drycleaning } from './icons/drycleaning';
import { DryingDripDryShade } from './icons/drying-drip-dry-shade';
import { DryingDripDry } from './icons/drying-drip-dry';
import { DryingDryShade } from './icons/drying-dry-shade';
import { DryingFlatDryShade } from './icons/drying-flat-dry-shade';
import { DryingFlatDry } from './icons/drying-flat-dry';
import { DryingLineDryShade } from './icons/drying-line-dry-shade';
import { DryingLineDry } from './icons/drying-line-dry';
import { DryingNotAllowed } from './icons/drying-not-allowed';
import { DryingTumbleHighHeat } from './icons/drying-tumble-high-heat';
import { DryingTumbleLowHeatExtraCare } from './icons/drying-tumble-low-heat-extra-care';
import { DryingTumbleLowHeatPermanentPress } from './icons/drying-tumble-low-heat-permanent-press';
import { DryingTumbleLowHeat } from './icons/drying-tumble-low-heat';
import { DryingTumbleMediumHeatPermanentPress } from './icons/drying-tumble-medium-heat-permanent-press';
import { DryingTumbleMediumHeat } from './icons/drying-tumble-medium-heat';
import { DryingTumbleNoHeat } from './icons/drying-tumble-no-heat';
import { DryingTumbleNotAllowed } from './icons/drying-tumble-not-allowed';
import { DryingTumble } from './icons/drying-tumble';
import { Drying } from './icons/drying';
import { IronHigh } from './icons/iron-high';
import { IronLow } from './icons/iron-low';
import { IronMedium } from './icons/iron-medium';
import { IronNotAllowed } from './icons/iron-not-allowed';
import { IronSteamNotAllowed } from './icons/iron-steam-not-allowed';
import { Iron } from './icons/iron';
import { Washing30degAlt } from './icons/washing-30deg-alt';
import { Washing30degExtraCareAlt } from './icons/washing-30deg-extra-care-alt';
import { Washing30degExtraCare } from './icons/washing-30deg-extra-care';
import { Washing30degPermanentPressAlt } from './icons/washing-30deg-permanent-press-alt';
import { Washing30degPermanentPress } from './icons/washing-30deg-permanent-press';
import { Washing30deg } from './icons/washing-30deg';
import { Washing40degAlt } from './icons/washing-40deg-alt';
import { Washing40degExtraCareAlt } from './icons/washing-40deg-extra-care-alt';
import { Washing40degExtraCare } from './icons/washing-40deg-extra-care';
import { Washing40degPermanentPressAlt } from './icons/washing-40deg-permanent-press-alt';
import { Washing40degPermanentPress } from './icons/washing-40deg-permanent-press';
import { Washing40deg } from './icons/washing-40deg';
import { Washing50degAlt } from './icons/washing-50deg-alt';
import { Washing50degPermanentPressAlt } from './icons/washing-50deg-permanent-press-alt';
import { Washing50degPermanentPress } from './icons/washing-50deg-permanent-press';
import { Washing50deg } from './icons/washing-50deg';
import { Washing60degAlt } from './icons/washing-60deg-alt';
import { Washing60degPermanentPressAlt } from './icons/washing-60deg-permanent-press-alt';
import { Washing60degPermanentPress } from './icons/washing-60deg-permanent-press';
import { Washing60deg } from './icons/washing-60deg';
import { Washing70degAlt } from './icons/washing-70deg-alt';
import { Washing70deg } from './icons/washing-70deg';
import { Washing90deg } from './icons/washing-90deg';
import { Washing95degAlt } from './icons/washing-95deg-alt';
import { Washing95degPermanentPressAlt } from './icons/washing-95deg-permanent-press-alt';
import { Washing95degPermanentPress } from './icons/washing-95deg-permanent-press';
import { WashingHand30deg } from './icons/washing-hand-30deg';
import { WashingHand40deg } from './icons/washing-hand-40deg';
import { WashingHand } from './icons/washing-hand';
import { WashingNotAllowed } from './icons/washing-not-allowed';
import { Washing } from './icons/washing';
import { WringingNotAllowed } from './icons/wringing-not-allowed';

export const iconMap: Record<string, ComponentType<WashIconProps>> = {
  'bleaching-non-chlorine': BleachingNonChlorine,
  'bleaching-not-allowed': BleachingNotAllowed,
  'bleaching': Bleaching,
  'custom-detergent': CustomDetergent,
  'custom-drop': CustomDrop,
  'custom-drying-machine-2': CustomDryingMachine2,
  'custom-iron': CustomIron,
  'custom-laundry-basket-full': CustomLaundryBasketFull,
  'custom-laundry-basket': CustomLaundryBasket,
  'custom-pants': CustomPants,
  'custom-t-shirt': CustomTShirt,
  'custom-washing-machine-2': CustomWashingMachine2,
  'custom-washing-machine': CustomWashingMachine,
  'drycleaning-a': DrycleaningA,
  'drycleaning-f-2': DrycleaningF2,
  'drycleaning-f': DrycleaningF,
  'drycleaning-low-heat': DrycleaningLowHeat,
  'drycleaning-no-steam': DrycleaningNoSteam,
  'drycleaning-not-allowed': DrycleaningNotAllowed,
  'drycleaning-p-2': DrycleaningP2,
  'drycleaning-p': DrycleaningP,
  'drycleaning-reduced-moisture': DrycleaningReducedMoisture,
  'drycleaning-short-cycle': DrycleaningShortCycle,
  'drycleaning-w-2': DrycleaningW2,
  'drycleaning-w-3': DrycleaningW3,
  'drycleaning-w': DrycleaningW,
  'drycleaning-wetclean-not-allowed': DrycleaningWetcleanNotAllowed,
  'drycleaning': Drycleaning,
  'drying-drip-dry-shade': DryingDripDryShade,
  'drying-drip-dry': DryingDripDry,
  'drying-dry-shade': DryingDryShade,
  'drying-flat-dry-shade': DryingFlatDryShade,
  'drying-flat-dry': DryingFlatDry,
  'drying-line-dry-shade': DryingLineDryShade,
  'drying-line-dry': DryingLineDry,
  'drying-not-allowed': DryingNotAllowed,
  'drying-tumble-high-heat': DryingTumbleHighHeat,
  'drying-tumble-low-heat-extra-care': DryingTumbleLowHeatExtraCare,
  'drying-tumble-low-heat-permanent-press': DryingTumbleLowHeatPermanentPress,
  'drying-tumble-low-heat': DryingTumbleLowHeat,
  'drying-tumble-medium-heat-permanent-press': DryingTumbleMediumHeatPermanentPress,
  'drying-tumble-medium-heat': DryingTumbleMediumHeat,
  'drying-tumble-no-heat': DryingTumbleNoHeat,
  'drying-tumble-not-allowed': DryingTumbleNotAllowed,
  'drying-tumble': DryingTumble,
  'drying': Drying,
  'iron-high': IronHigh,
  'iron-low': IronLow,
  'iron-medium': IronMedium,
  'iron-not-allowed': IronNotAllowed,
  'iron-steam-not-allowed': IronSteamNotAllowed,
  'iron': Iron,
  'washing-30deg-alt': Washing30degAlt,
  'washing-30deg-extra-care-alt': Washing30degExtraCareAlt,
  'washing-30deg-extra-care': Washing30degExtraCare,
  'washing-30deg-permanent-press-alt': Washing30degPermanentPressAlt,
  'washing-30deg-permanent-press': Washing30degPermanentPress,
  'washing-30deg': Washing30deg,
  'washing-40deg-alt': Washing40degAlt,
  'washing-40deg-extra-care-alt': Washing40degExtraCareAlt,
  'washing-40deg-extra-care': Washing40degExtraCare,
  'washing-40deg-permanent-press-alt': Washing40degPermanentPressAlt,
  'washing-40deg-permanent-press': Washing40degPermanentPress,
  'washing-40deg': Washing40deg,
  'washing-50deg-alt': Washing50degAlt,
  'washing-50deg-permanent-press-alt': Washing50degPermanentPressAlt,
  'washing-50deg-permanent-press': Washing50degPermanentPress,
  'washing-50deg': Washing50deg,
  'washing-60deg-alt': Washing60degAlt,
  'washing-60deg-permanent-press-alt': Washing60degPermanentPressAlt,
  'washing-60deg-permanent-press': Washing60degPermanentPress,
  'washing-60deg': Washing60deg,
  'washing-70deg-alt': Washing70degAlt,
  'washing-70deg': Washing70deg,
  'washing-90deg': Washing90deg,
  'washing-95deg-alt': Washing95degAlt,
  'washing-95deg-permanent-press-alt': Washing95degPermanentPressAlt,
  'washing-95deg-permanent-press': Washing95degPermanentPress,
  'washing-hand-30deg': WashingHand30deg,
  'washing-hand-40deg': WashingHand40deg,
  'washing-hand': WashingHand,
  'washing-not-allowed': WashingNotAllowed,
  'washing': Washing,
  'wringing-not-allowed': WringingNotAllowed,
};
