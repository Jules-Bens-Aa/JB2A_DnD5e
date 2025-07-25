const freeDatabase = {};
export async function jb2aFreeDatabase(prefix) {

    freeDatabase._templates = {
        //default: [100, 0, 0],
        cone: [100, 0, 0],
        cone100: [100, 100, 100],
        cone100_02: [100, 50, 150],
        cone200: [200, 100, 100],
        large: [200, 0, 0],
        line100: [100, 50, 150],
        line200: [200, 200, 200],
        line200B: [200, 0, 300],
        melee: [200, 300, 300],
        ranged: [200, 200, 200],
        ray: [100, 0, 0],
        side_impact: [200, 100, 0]
    }
    freeDatabase.antilife_shell = {
        blue_no_circle: `${prefix}/JB2A_DnD5e/Library/5th_Level/Antilife_Shell/AntilifeShell_01_Blue_NoCircle_400x400.webm`,
        blue_with_circle: `${prefix}/JB2A_DnD5e/Library/5th_Level/Antilife_Shell/AntilifeShell_01_Blue_Circle_400x400.webm`
    }
    freeDatabase.arcane_hand = {
        blue: `${prefix}/JB2A_DnD5e/Library/5th_Level/Arcane_Hand/ArcaneHand_Human_01_Idle_Blue_400x400.webm`,
        green: `${prefix}/JB2A_DnD5e/Library/5th_Level/Arcane_Hand/ArcaneHand_Human_01_Idle_Green_400x400.webm`,
        purple: `${prefix}/JB2A_DnD5e/Library/5th_Level/Arcane_Hand/ArcaneHand_Human_01_Idle_Purple_400x400.webm`,
        red: `${prefix}/JB2A_DnD5e/Library/5th_Level/Arcane_Hand/ArcaneHand_Human_01_Idle_Red_400x400.webm`,
    }
    freeDatabase.arms_of_hadar = {
        dark_purple: `${prefix}/JB2A_DnD5e/Library/1st_Level/Arms_Of_Hadar/ArmsOfHadar_01_Dark_Purple_500x500.webm`
    }
    freeDatabase.arrow = {
        _template: 'ranged',
        physical: {
            blue: {
                '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_05ft_600x400.webm`,
                '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_15ft_1000x400.webm`,
                '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_30ft_1600x400.webm`,
                '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_60ft_2800x400.webm`,
                '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_90ft_4000x400.webm`
            },

            white: {
                '01': {
                    '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_White_05ft_600x400.webm`,
                    '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_White_15ft_1000x400.webm`,
                    '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_White_30ft_1600x400.webm`,
                    '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_White_60ft_2800x400.webm`,
                    '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_White_90ft_4000x400.webm`
                },
            }
        },
        poison: {
            green: {
                '01': {
                    '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_Green_05ft_600x400.webm`,
                    '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_Green_15ft_1000x400.webm`,
                    '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_Green_30ft_1600x400.webm`,
                    '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_Green_60ft_2800x400.webm`,
                    '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_Green_90ft_4000x400.webm`
                },
            }
        }
    }
    freeDatabase.aura_themed = {
        '01': {
            inward: {
                complete: {
                    _markers: {
                        loop: { start: 2833, end: 6800 }
                    },
                    cold: {
                        '01': {
                            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedInwardCompleteCold01_01_Regular_Blue_700x700.webm`
                        }
                    },
                    metal: {
                        '01': {
                            grey: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedInwardCompleteMetal01_01_Regular_Grey_700x700.webm`
                        }
                    },
                    nature: {
                        '01': {
                            green: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedInwardCompleteNature01_01_Regular_Green_700x700.webm`,
                        }
                    },
                    wood: {
                        '01': {
                            green: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedInwardCompleteWood01_01_Regular_Green_700x700.webm`,
                        }
                    }
                },
                loop: {
                    cold: {
                        '01': {
                            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedInwardLoopCold01_01_Regular_Blue_700x700.webm`
                        }
                    },
                    metal: {
                        '01': {
                            grey: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedInwardLoopMetal01_01_Regular_Grey_700x700.webm`
                        }
                    },
                    nature: {
                        '01': {
                            green: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedInwardLoopNature01_01_Regular_Green_700x700.webm`
                        }
                    },
                    wood: {
                        '01': {
                            green: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedInwardLoopWood01_01_Regular_Green_700x700.webm`
                        }
                    }
                }
            },
            outward: {
                complete: {
                    _markers: {
                        loop: { start: 2833, end: 6800 }
                    },
                    cold: {
                        '01': {
                            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedOutwardCompleteCold01_01_Regular_Blue_700x700.webm`
                        }
                    },
                    metal: {
                        '01': {
                            grey: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedOutwardCompleteMetal01_01_Regular_Grey_700x700.webm`
                        }
                    },
                    nature: {
                        '01': {
                            green: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedOutwardCompleteNature01_01_Regular_Green_700x700.webm`
                        }
                    },
                    wood: {
                        '01': {
                            green: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedOutwardCompleteWood01_01_Regular_Green_700x700.webm`
                        }
                    }
                },
                loop: {
                    cold: {
                        '01': {
                            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedOutwardLoopCold01_01_Regular_Blue_700x700.webm`
                        }
                    },
                    metal: {
                        '01': {
                            grey: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedOutwardLoopMetal01_01_Regular_Grey_700x700.webm`
                        }
                    },
                    nature: {
                        '01': {
                            green: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedOutwardLoopNature01_01_Regular_Green_700x700.webm`
                        }
                    },
                    wood: {
                        '01': {
                            green: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedOutwardLoopWood01_01_Regular_Green_700x700.webm`
                        }
                    }
                }
    
            },
            orbit: {
                complete: {
                    _markers: {
                        loop: { start: 2833, end: 6800 }
                    },
                    cold: {
                        '01': {
                            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedOrbitCompleteCold01_01_Regular_Blue_700x700.webm`
                        }
                    },
                    metal: {
                        '01': {
                            grey: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedOrbitCompleteMetal01_01_Regular_Grey_700x700.webm`
                        }
                    },
                    nature: {
                        '01': {
                            green: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedOrbitCompleteNature01_01_Regular_Green_700x700.webm`
                        }
                    },
                    wood: {
                        '01': {
                            green: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedOrbitCompleteWood01_01_Regular_Green_700x700.webm`
                        }
                    }
                },
                loop: {
                    cold: {
                        '01': {
                            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedOrbitLoopCold01_01_Regular_Blue_700x700.webm`
                        }
                    },
                    metal: {
                        '01': {
                            grey: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedOrbitLoopMetal01_01_Regular_Grey_700x700.webm`
                        }
                    },
                    nature: {
                        '01': {
                            green: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedOrbitLoopNature01_01_Regular_Green_700x700.webm`
                        }
                    },
                    wood: {
                        '01': {
                            green: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraThemedOrbitLoopWood01_01_Regular_Green_700x700.webm`
                        }
                    }
                }
    
            }
        }
    }
    freeDatabase.bardic_inspiration = {
        greenorange: `${prefix}/JB2A_DnD5e/Library/1st_Level/Bardic_Inspiration/BardicInspiration_01_Regular_GreenOrange_400x400.webm`,
    }
    freeDatabase.barrel = {
        _template: 'ranged',
        toss: {
            metal: {
                '01': {
                    '01': {
                        red: {
                            '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/MetalBarrelToss01_01_Regular_Red_05ft_600x400.webm`,
                            '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/MetalBarrelToss01_01_Regular_Red_15ft_1000x400.webm`,
                            '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/MetalBarrelToss01_01_Regular_Red_30ft_1600x400.webm`,
                            '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/MetalBarrelToss01_01_Regular_Red_60ft_2800x400.webm`,
                            '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/MetalBarrelToss01_01_Regular_Red_90ft_4000x400.webm`
                        }
                    }
                }
            },
            wooden: {
                '01': {
                    '01': {
                        brown: {
                            '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/WoodenBarrelToss01_01_Regular_Brown_05ft_600x400.webm`,
                            '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/WoodenBarrelToss01_01_Regular_Brown_15ft_1000x400.webm`,
                            '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/WoodenBarrelToss01_01_Regular_Brown_30ft_1600x400.webm`,
                            '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/WoodenBarrelToss01_01_Regular_Brown_60ft_2800x400.webm`,
                            '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/WoodenBarrelToss01_01_Regular_Brown_90ft_4000x400.webm`
                        }
                    }
                }
            },
        }
    }
    freeDatabase.bats = {
        complete: {
            _markers: {
                loop: { start: 3033, end: 6000 }
            },
            '01': {
                red: `${prefix}/JB2A_DnD5e/Library/Generic/Creature/BatsComplete01_01_Regular_Red_600x600.webm`,
            }
        },
        loop: {
            '01': {
                red: `${prefix}/JB2A_DnD5e/Library/Generic/Creature/BatsLoop01_01_Regular_Red_600x600.webm`,
            }
        }
    }
    freeDatabase.bite = {
        '200px': {
            red: `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Bite_01_Regular_Red_200x200.webm`,
        },
        '400px': {
            red: `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Bite_01_Regular_Red_400x400.webm`,
        }
    }
    freeDatabase.black_tentacles = {
        dark_purple: `${prefix}/JB2A_DnD5e/Library/4th_Level/Black_Tentacles/BlackTentacles_01_Dark_Purple_600x600.webm`
    }
    freeDatabase.bless = {
        '200px': {
            intro: {
                yellow: `${prefix}/JB2A_DnD5e/Library/1st_Level/Bless/Bless_01_Regular_Yellow_Intro_200x200.webm`
            },
            loop: {
                yellow: `${prefix}/JB2A_DnD5e/Library/1st_Level/Bless/Bless_01_Regular_Yellow_Loop_200x200.webm`
            }
        },
        '400px': {
            intro: {
                yellow: `${prefix}/JB2A_DnD5e/Library/1st_Level/Bless/Bless_01_Regular_Yellow_Intro_400x400.webm`
            },
            loop: {
                yellow: `${prefix}/JB2A_DnD5e/Library/1st_Level/Bless/Bless_01_Regular_Yellow_Loop_400x400.webm`
            }
        }
    }
    freeDatabase.bolt = {
        _template: 'ranged',
        physical: {
            orange: {
                '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_05ft_600x400.webm`,
                '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_15ft_1000x400.webm`,
                '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_30ft_1600x400.webm`,
                '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_60ft_2800x400.webm`,
                '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_90ft_4000x400.webm`
            },
        },
    }
    freeDatabase.bonfire = {
        '01': {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Campfire/Bonfire_01_Regular_Orange_400x400.webm`,
        },
    }
    freeDatabase.boulder = {
        _template: 'ranged',
        toss: {
            '02': {
                '01': {
                    stone: {
                        brown: {
                            '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/BoulderToss02_01_Regular_Brown_05ft_600x400.webm`,
                            '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/BoulderToss02_01_Regular_Brown_15ft_1000x400.webm`,
                            '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/BoulderToss02_01_Regular_Brown_30ft_1600x400.webm`,
                            '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/BoulderToss02_01_Regular_Brown_60ft_2800x400.webm`,
                            '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/BoulderToss02_01_Regular_Brown_90ft_4000x400.webm`
                        }
                    }
                }
            }
        }
    }
    freeDatabase.braziers = {
        orange: {
            bordered: {
                '01': {
                    '05x05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Brazier/Brazier_01_Wall_Orange_05x05ft_200x200.webm`,
                    '10x05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Brazier/Brazier_01_Wall_Orange_10x05ft_400x200.webm`,
                    '10x10ft': `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Brazier/Brazier_01_Wall_Orange_10x10ft_400x400.webm`
                },
            },
        },
        extinguished: {
            bordered: {
                '01': {
                    '05x05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Brazier/Brazier_01_Wall_Black_05x05ft.webp`,
                    '10x05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Brazier/Brazier_01_Wall_Black_10x05ft.webp`,
                    '10x10ft': `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Brazier/Brazier_01_Wall_Black_10x10ft.webp`
                },
            },
        }
    }
    freeDatabase.breath_weapons = {
        acid: {
            line: {
                _template: "ray",
                green: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Line/Breath_Weapon/BreathWeapon_Acid01_Regular_Green_30ft_Line_Burst_1200x200.webm`,
            }
        },
        cold: {
            cone: {
                _template: "cone",
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Cold01_Regular_Blue_30ft_Cone_Burst_600x600.webm`,
            }
        },
        fire: {
            cone: {
                _template: "cone",
                orange: {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Fire01_Regular_Orange_30ft_Cone_Burst_600x600.webm`,
                },
            },
            line: {
                _template: "line",
                orange: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Line/Breath_Weapon/BreathWeapon_Fire01_Regular_Orange_30ft_Line_Burst_1200x200.webm`,
            }
        },
        lightning: {
            line: {
                _template: "line",
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Line/Breath_Weapon/BreathWeapon_Lightning01_Regular_Blue_30ft_Line_Burst_1200x200.webm`,
            }
        },
        poison: {
            cone: {
                _template: "cone",
                green: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Green_30ft_Cone_Burst_600x600.webm`,
            }
        }
    }
    freeDatabase.breath_weapons02 = {
        burst: {
            cone: {
                _template: "cone100_02",
                fire: {
                    orange: {
                        '01': `${prefix}/JB2A_DnD5e/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Fire01_Regular_Orange_Cone_Burst_800x800.webm`,
                        '02': `${prefix}/JB2A_DnD5e/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Fire02_Regular_Orange_Cone_Burst_800x800.webm`
                    }
                }
            },
            line: {
                _template: "line100",
                fire: {
                    orange: {
                        '01': `${prefix}/JB2A_DnD5e/Library/Generic/Template/Line/Breath_Weapon/Breathweapon02_Fire01_Regular_Orange_Line_Burst_1200x400.webm`
                    }
                }
            }
        },
        loop: {
            cone: {
                fire: {
                    orange: {
                        '01': `${prefix}/JB2A_DnD5e/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Fire01_Regular_Orange_Cone_Loop_800x800.webm`,
                        '02': `${prefix}/JB2A_DnD5e/Library/Generic/Template/Cone/Breath_Weapon/Breathweapon02_Fire02_Regular_Orange_Cone_Loop_800x800.webm`
                    }
                },
            },
            line: {
                fire: {
                    orange: {
                        '01': `${prefix}/JB2A_DnD5e/Library/Generic/Template/Line/Breath_Weapon/Breathweapon02_Fire01_Regular_Orange_Line_Loop_1200x400.webm`
                    }
                }
            }
        }
    }
    freeDatabase.bubble = {
        "001": {
            "001": {
                complete: {
                    _markers: {
                        loop: { start: 2000, end: 3967 }
                    },
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Liquid/Bubble/BubbleComplete001_001_Blue_2x2_400x400.webm`
                },
                loop: {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Liquid/Bubble/BubbleLoop001_001_Blue_2x2_400x400.webm`
                }
            },
            "002": {
                complete: {
                    _markers: {
                        loop: { start: 2000, end: 3967 }
                    },
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Liquid/Bubble/BubbleComplete001_002_Blue_3x3_600x600.webm`
                },
                loop: {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Liquid/Bubble/BubbleLoop001_002_Blue_3x3_600x600.webm`
                }
            }
        },
        "002": {
            "001": {
                complete: {
                    _markers: {
                        loop: { start: 4000, end: 7967 }
                    },
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Liquid/Bubble/BubbleComplete002_001_Blue_3x3_600x600.webm`
                },
                loop: {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Liquid/Bubble/BubbleLoop002_001_Blue_3x3_600x600.webm`
                }
            },
            "002": {
                complete: {
                    _markers: {
                        loop: { start: 4000, end: 7967 }
                    },
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Liquid/Bubble/BubbleComplete002_002_Blue_3x3_600x600.webm`
                },
                loop: {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Liquid/Bubble/BubbleLoop002_002_Blue_3x3_600x600.webm`
                }
            }
        }
    }
    freeDatabase.bullet = {
        _template: 'ranged',
        '01': {
            orange: {
                '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_05ft_600x400.webm`,
                '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_15ft_1000x400.webm`,
                '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_30ft_1600x400.webm`,
                '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_60ft_2800x400.webm`,
                '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_90ft_4000x400.webm`
            }
        },
        '02': {
            orange: {
                '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_05ft_600x400.webm`,
                '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_15ft_1000x400.webm`,
                '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_30ft_1600x400.webm`,
                '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_60ft_2800x400.webm`,
                '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_90ft_4000x400.webm`
            },
        },
        '03': {
            blue: {
                '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_05ft_600x400.webm`,
                '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_15ft_1000x400.webm`,
                '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_30ft_1600x400.webm`,
                '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_60ft_2800x400.webm`,
                '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_90ft_4000x400.webm`
            },
        },
        Snipe: {
            blue: {
                '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_05ft_600x400.webm`,
                '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_15ft_1000x400.webm`,
                '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_30ft_1600x400.webm`,
                '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_60ft_2800x400.webm`,
                '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_90ft_4000x400.webm`
            },
        }
    }
    freeDatabase.burning_hands = {
        _template: 'cone',
        '01': {
            orange: `${prefix}/JB2A_DnD5e/Library/1st_Level/Burning_Hands/BurningHands_01_Regular_Orange_600x600.webm`,
        },
    }
    freeDatabase.butterflies = {
        complete: {
            _markers: {
                loop: { start: 3033, end: 6000 }
            },
            '01': {
                bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Butterflies/ButterfliesComplete01_01_Regular_BluePurple_600x600.webm`
            }
        },
        loop: {
            '01': {
                bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Butterflies/ButterfliesLoop01_01_Regular_BluePurple_600x600.webm`
            }
        },
        inward: {
            '01': {
                bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Butterflies/ButterfliesInward01_01_Regular_BluePurple_600x600.webm`
            }
        },
        inward_burst: {
            '01': {
                bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Butterflies/ButterfliesInwardBurst01_01_Regular_BluePurple_600x600.webm`
            }
        },
        outward: {
            '01': {
                bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Butterflies/ButterfliesOutward01_01_Regular_BluePurple_600x600.webm`
            }
        },
        outward_burst: {
            '01': {
                bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Butterflies/ButterfliesOutwardBurst01_01_Regular_BluePurple_400x400.webm`
            }
        },
        few: {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Butterflies/Butterflies_01_Regular_Orange_Few_400x400.webm`
        },
        many: {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Butterflies/Butterflies_01_Regular_Orange_Many_400x400.webm`
        },
        single: {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Butterflies/Butterflies_01_Regular_Orange_Single_400x400.webm`
        }
    }
    freeDatabase.call_lightning = {
        low_res: {
            blue: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/CallLightning_01_Blue_1000x1000.webm`,
            blueorange: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/CallLightning_01_BlueOrange_1000x1000.webm`,
            green: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/CallLightning_01_Green_1000x1000.webm`,
            pinkyellow: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/CallLightning_01_PinkYellow_1000x1000.webm`,
            purple: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/CallLightning_01_Purple_1000x1000.webm`,
            red: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/CallLightning_01_Red_1000x1000.webm`,
            yellow: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/CallLightning_01_Yellow_1000x1000.webm`,
        },
        high_res: {
            blue: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/High_Res/CallLightning_01_Blue_2400x2400.webm`,
            blueorange: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/High_Res/CallLightning_01_BlueOrange_2400x2400.webm`,
            purple: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/High_Res/CallLightning_01_Purple_2400x2400.webm`,
            red: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/High_Res/CallLightning_01_Red_2400x2400.webm`,
            yellow: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/High_Res/CallLightning_01_Yellow_2400x2400.webm`,
        }
    }
    freeDatabase.caltrops = {
        endframe: {
            '01': {
                grey: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Caltrops01_01_Regular_Grey_Endframe.webp`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Caltrops01_02_Regular_Grey_Endframe.webp`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Caltrops01_03_Regular_Grey_Endframe.webp`,
                ]
            }
        },
        '01': {
            grey: [
                `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Caltrops01_01_Regular_Grey_400x400.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Caltrops01_02_Regular_Grey_400x400.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Caltrops01_03_Regular_Grey_400x400.webm`,
            ]
        }
    }
    freeDatabase.campfire = {
        '01': {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Campfire/Campfire_01_Regular_Orange_200x200.webm`,
        },
        '03': {
            '01': {
                complete: {
                    _markers: {
                        loop: { start: 3200, end: 8167 }
                    },
                    orange: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Campfire/Campfire03_01_Orange_Complete_400x1000.webm`
                },
                loop: {
                    orange: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Campfire/Campfire03_01_Orange_Loop_400x1000.webm`
                }
            },
            '02': {
                complete: {
                    _markers: {
                        loop: { start: 3200, end: 8167 }
                    },
                    orange: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Campfire/Campfire03_02_Orange_Complete_400x600.webm`
                },
                loop: {
                    orange: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Campfire/Campfire03_02_Orange_Loop_400x600.webm`
                }
            }
        }
    }
    freeDatabase.cast_generic = {
        '01': {
            yellow: [`${prefix}/JB2A_DnD5e/Library/Generic/Cast/GenericCast01_01_Regular_Yellow_400x400.webm`],
        },
        '02': {
            blue: [`${prefix}/JB2A_DnD5e/Library/Generic/Cast/GenericCast02_01_Regular_Blue_400x400.webm`],
        },
        '03': {
            blue: [`${prefix}/JB2A_DnD5e/Library/Generic/Cast/GenericCast03_01_Blue_600x600.webm`]
        },
        earth: {
            '01': {
                browngreen: [`${prefix}/JB2A_DnD5e/Library/Generic/Cast/CastEarth01_01_Regular_BrownGreen_600x600.webm`]
            }
        },
        fire: {
            "01": {
                orange:[`${prefix}/JB2A_DnD5e/Library/Generic/Cast/CastFire01_01_Regular_Orange_600x600.webm`]
            },
            "side01": {
                orange: [`${prefix}/JB2A_DnD5e/Library/Generic/Cast/CastSideFire01_01_Regular_Orange_800x600.webm`]
            }
        },
        sound: {
            '01': {
                pinkteal: [`${prefix}/JB2A_DnD5e/Library/Generic/Cast/CastSound01_01_Regular_PinkTeal_600x600.webm`]
            }
        },
        water: {
            "02": {
                blue: [`${prefix}/JB2A_DnD5e/Library/Generic/Cast/CastWater02_01_Regular_Blue_400x400.webm`]
            }
        }
    }
    freeDatabase.cast_shape = {
        circle: {
            '01': {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Cast/CastShapeCircle01_01_Regular_Blue_600x600.webm`
            },
            'single01': {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Cast/CastShapeCircleSingle01_01_Regular_Blue_600x600.webm`
            }
        },
        square: {
            '01': {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Cast/CastShapeSquare01_01_Regular_Blue_600x600.webm`
            },
            'single01': {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Cast/CastShapeSquareSingle01_01_Regular_Blue_600x600.webm`
            }
        },

    }
    freeDatabase.celestial_bodies = {
        asteroid: {
            disk: {
                iron: {
                    red: {
                        '01': `${prefix}/JB2A_DnD5e/Library/Generic/Celestial_Bodies/AsteroidDiskIron01_01_Regular_Red_600x600.webm`,
                        '02': `${prefix}/JB2A_DnD5e/Library/Generic/Celestial_Bodies/AsteroidDiskIron02_01_Regular_Red_600x600.webm`,
                        '03': `${prefix}/JB2A_DnD5e/Library/Generic/Celestial_Bodies/AsteroidDiskIron03_01_Regular_Red_600x600.webm`,
                        '04': `${prefix}/JB2A_DnD5e/Library/Generic/Celestial_Bodies/AsteroidDiskIron04_01_Regular_Red_600x600.webm`
                    }
                }

            },
            large_disk: {
                iron: {
                    red: {
                        '01': `${prefix}/JB2A_DnD5e/Library/Generic/Celestial_Bodies/AsteroidLargeDiskIron01_01_Regular_Red_800x800.webm`
                    }
                }
            },
            line: {
                '05x15': {
                    iron: {
                        red: {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Celestial_Bodies/AsteroidLineIron01_01_Regular_Red_05x15_600x200.webm`
                        }
                    }
                },
                '05x25': {
                    iron: {
                        red: {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Celestial_Bodies/AsteroidLineIron01_01_Regular_Red_05x25_1000x200.webm`
                        }
                    }
                }
            },
            ring: {
                iron: {
                    red: {
                        '01': `${prefix}/JB2A_DnD5e/Library/Generic/Celestial_Bodies/AsteroidRingIron01_01_Regular_Red_800x800.webm`
                    }
                }
            },
            single: {
                iron: {
                    red: {
                        '01': `${prefix}/JB2A_DnD5e/Library/Generic/Celestial_Bodies/AsteroidSingleIron01_01_Regular_Red_400x400.webm`,
                        '02': `${prefix}/JB2A_DnD5e/Library/Generic/Celestial_Bodies/AsteroidSingleIron02_01_Regular_Red_400x400.webm`,
                        '03': `${prefix}/JB2A_DnD5e/Library/Generic/Celestial_Bodies/AsteroidSingleIron03_01_Regular_Red_400x400.webm`,
                        '04': `${prefix}/JB2A_DnD5e/Library/Generic/Celestial_Bodies/AsteroidSingleIron04_01_Regular_Red_400x400.webm`
                    }
                }
            }
        },
        planet: {
            atmo: {
                '01': {
                    blueorange: `${prefix}/JB2A_DnD5e/Library/Generic/Celestial_Bodies/PlanetAtmo_01_Regular_BlueOrange_800x800.webm`
                },
                '05': {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Celestial_Bodies/PlanetAtmo_05_Regular_Red_800x800.webm`
                },
                '06': {
                    yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Celestial_Bodies/PlanetAtmo_06_Regular_Yellow_800x800.webm`
                }
            },
            gas_giant: {
                '01': {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Celestial_Bodies/PlanetGasGiant_01_Regular_Blue_800x800.webm`
                }
            },
            no_atmo: {
                '03': {
                    grey: `${prefix}/JB2A_DnD5e/Library/Generic/Celestial_Bodies/PlanetNoAtmo_03_Regular_Grey_800x800.webm`
                }
            }
        }
    },
        freeDatabase.chain_lightning = {
            _template: 'ranged',
            primary: {
                blue: {
                    '05ft': `${prefix}/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_05ft_Primary_600x400.webm`,
                    '15ft': `${prefix}/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_15ft_Primary_1000x400.webm`,
                    '30ft': `${prefix}/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_30ft_Primary_1600x400.webm`,
                    '60ft': `${prefix}/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_60ft_Primary_2800x400.webm`,
                    '90ft': `${prefix}/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_90ft_Primary_4000x400.webm`
                },
            },
            secondary: {
                blue: {
                    '05ft': `${prefix}/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_05ft_Secondary_600x400.webm`,
                    '15ft': `${prefix}/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_15ft_Secondary_1000x400.webm`,
                    '30ft': `${prefix}/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_30ft_Secondary_1600x400.webm`,
                    '60ft': `${prefix}/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_60ft_Secondary_2800x400.webm`,
                    '90ft': `${prefix}/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_90ft_Secondary_4000x400.webm`
                },
            }
        }
    freeDatabase.claws = {
        '200px': {
            red: `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Claws_01_Regular_Red_200x200.webm`
        },
        '400px': {
            red: `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Claws_01_Regular_Red_400x400.webm`
        }
    }
    freeDatabase.cloud_of_daggers = {
        daggers: {
            blue: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Light_Blue_400x400.webm`,
            green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Light_Green_400x400.webm`,
            orange: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Light_Orange_400x400.webm`,
            purple: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Light_Purple_400x400.webm`,
            red: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Light_Red_400x400.webm`,
            yellow: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Light_Yellow_400x400.webm`
        },
    }
    freeDatabase.club = {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Club01_01_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Club01_02_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Club01_03_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Club01_04_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Club01_05_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Club01_06_Regular_White_800x600.webm`
                ]
            }
        }
    }
    freeDatabase.condition = {
        boon: {
            "01": {
                "001": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_001_Green_600x600.webm`
                },
                "002": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_002_Green_600x600.webm`
                },
                "003": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_003_Green_600x600.webm`
                },
                "004": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_004_Green_600x600.webm`
                },
                "005": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_005_Green_600x600.webm`
                },
                "006": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_006_Green_600x600.webm`
                },
                "007": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_007_Green_600x600.webm`
                },
                "008": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_008_Green_600x600.webm`
                },
                "009": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_009_Green_600x600.webm`
                },
                "010": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_010_Green_600x600.webm`
                },
                "011": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_011_Green_600x600.webm`
                },
                "012": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_012_Green_600x600.webm`
                },
                "013": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_013_Green_600x600.webm`
                },
                "014": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_014_Green_600x600.webm`
                },
                "015": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_015_Green_600x600.webm`
                },
                "016": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_016_Green_600x600.webm`
                },
                "017": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_017_Green_600x600.webm`
                },
                "018": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_018_Green_600x600.webm`
                },
                "019": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_019_Green_600x600.webm`
                },
                "020": {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon01/ConditionBoon01_020_Green_600x600.webm`
                }

            },
            "02": {
                "001": {
                    refraction: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon02/ConditionBoon02_001_Refraction_600x600.webm`                   
                },
                "002": {
                    refraction: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon02/ConditionBoon02_002_Refraction_600x600.webm`                
                },
                "003": {
                    refraction: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon02/ConditionBoon02_003_Refraction_600x600.webm`                  
                },
                "004": {
                    refraction: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon02/ConditionBoon02_004_Refraction_600x600.webm`                  
                },
                "005": {
                    refraction: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Boon02/ConditionBoon02_005_Refraction_600x600.webm`                  
                }
            }
        },
        curse: {
            "01": {
                "001": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_001_Red_600x600.webm`,
                },
                "002": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_002_Red_600x600.webm`,
                },
                "003": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_003_Red_600x600.webm`,
                },
                "004": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_004_Red_600x600.webm`,
                },
                "005": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_005_Red_600x600.webm`,
                },
                "006": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_006_Red_600x600.webm`,
                },
                "007": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_007_Red_600x600.webm`,
                },
                "008": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_008_Red_600x600.webm`,
                },
                "009": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_009_Red_600x600.webm`,
                },
                "010": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_010_Red_600x600.webm`,
                },
                "011": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_011_Red_600x600.webm`,
                },
                "012": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_012_Red_600x600.webm`,
                },
                "013": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_013_Red_600x600.webm`,
                },
                "014": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_014_Red_600x600.webm`,
                },
                "015": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_015_Red_600x600.webm`,
                },
                "016": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_016_Red_600x600.webm`,
                },
                "017": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_017_Red_600x600.webm`,
                },
                "018": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_018_Red_600x600.webm`,
                },
                "019": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_019_Red_600x600.webm`,
                },
                "020": {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Curse01/ConditionCurse01_020_Red_600x600.webm`,
                }
            }
        }
    }
    freeDatabase.cone_of_cold = {
        _template: "cone",
        blue: `${prefix}/JB2A_DnD5e/Library/5th_Level/Cone_Of_Cold/ConeOfCold_01_Regular_Blue_600x600.webm`,
    }
    freeDatabase.cure_wounds = {
        '200px': {
            blue: `${prefix}/JB2A_DnD5e/Library/1st_Level/Cure_Wounds/CureWounds_01_Blue_200x200.webm`,
        },
        '400px': {
            blue: `${prefix}/JB2A_DnD5e/Library/1st_Level/Cure_Wounds/CureWounds_01_Blue_400x400.webm`,
        }
    }
    freeDatabase.dagger = {
        melee: {
            _template: 'melee',
            '02': {
                white: `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Dagger02_01_Regular_White_800x600.webm`,
            }
        },
        return: {
            _template: 'ranged',
            '01': {
                white: {
                    '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_15ft_1000x400.webm`,
                    '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_30ft_1600x400.webm`,
                    '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_60ft_2800x400.webm`,
                    '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_90ft_4000x400.webm`
                }
            },
        },
        throw: {
            _template: 'ranged',
            '01': {
                white: {
                    '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_15ft_1000x400.webm`,
                    '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_30ft_1600x400.webm`,
                    '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_60ft_2800x400.webm`,
                    '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_90ft_4000x400.webm`
                }
            },
        }
    }
    freeDatabase.dancing_light = {
        blueteal: `${prefix}/JB2A_DnD5e/Library/Cantrip/Dancing_Lights/DancingLights_01_BlueTeal_200x200.webm`,
        blueyellow: `${prefix}/JB2A_DnD5e/Library/Cantrip/Dancing_Lights/DancingLights_01_BlueYellow_200x200.webm`,
        green: `${prefix}/JB2A_DnD5e/Library/Cantrip/Dancing_Lights/DancingLights_01_Green_200x200.webm`,
        pink: `${prefix}/JB2A_DnD5e/Library/Cantrip/Dancing_Lights/DancingLights_01_Pink_200x200.webm`,
        purplegreen: `${prefix}/JB2A_DnD5e/Library/Cantrip/Dancing_Lights/DancingLights_01_PurpleGreen_200x200.webm`,
        red: `${prefix}/JB2A_DnD5e/Library/Cantrip/Dancing_Lights/DancingLights_01_Red_200x200.webm`,
        yellow: `${prefix}/JB2A_DnD5e/Library/Cantrip/Dancing_Lights/DancingLights_01_Yellow_200x200.webm`
    }
    freeDatabase.darkness = {
        black: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Darkness/Darkness_01_Black_600x600.webm`,
        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Darkness/Darkness_01_Green_600x600.webm`,
    }
    freeDatabase.detect_magic = {
        _template: 'cone100',
        circle: {
            blue: `${prefix}/JB2A_DnD5e/Library/1st_Level/Detect_Magic/DetectMagicCircle_01_Regular_Blue_1200x1200.webm`,
        },
        cone: {
            blue: {
                '05ft': `${prefix}/JB2A_DnD5e/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_Blue_05ft_300x300.webm`,
                '15ft': `${prefix}/JB2A_DnD5e/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_Blue_15ft_500x500.webm`,
                '30ft': `${prefix}/JB2A_DnD5e/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_Blue_30ft_800x800.webm`
            }
        }

    }
    freeDatabase.disintegrate = {
        _template: 'ranged',
        green: {
            '05ft': `${prefix}/JB2A_DnD5e/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Green01_05ft_600x400.webm`,
            '15ft': `${prefix}/JB2A_DnD5e/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Green01_15ft_1000x400.webm`,
            '30ft': `${prefix}/JB2A_DnD5e/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Green01_30ft_1600x400.webm`,
            '60ft': `${prefix}/JB2A_DnD5e/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Green01_60ft_2800x400.webm`,
            '90ft': `${prefix}/JB2A_DnD5e/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Green01_90ft_4000x400.webm`
        },
    }
    freeDatabase.divine_smite = {
        caster: {
            reversed: {
                blueyellow: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Divine_Smite/DivineSmiteReversed_01_Regular_BlueYellow_Caster_400x400.webm`
            },
            standard: {
                blueyellow: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Divine_Smite/DivineSmite_01_Regular_BlueYellow_Caster_400x400.webm`
            },
            blueyellow: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Divine_Smite/DivineSmite_01_Regular_BlueYellow_Caster_400x400.webm`
        },
        target: {
            blueyellow: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Divine_Smite/DivineSmite_01_Regular_BlueYellow_Target_400x400.webm`
        }
    }
    freeDatabase.dizzy_stars = {
        '200px': {
            blueorange: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_BlueOrange_200x200.webm`
        },
        '400px': {
            blueorange: `${prefix}/JB2A_DnD5e/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_BlueOrange_400x400.webm`
        }
    }
    freeDatabase.drop_shadow = {
        dark_black: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/DropShadow_01_Dark_Black_400x400.webm`
    }
    freeDatabase.eldritch_blast = {
        _template: 'ranged',
        purple: {
            '05ft': `${prefix}/JB2A_DnD5e/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Purple_05ft_600x400.webm`,
            '15ft': `${prefix}/JB2A_DnD5e/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Purple_15ft_1000x400.webm`,
            '30ft': `${prefix}/JB2A_DnD5e/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Purple_30ft_1600x400.webm`,
            '60ft': `${prefix}/JB2A_DnD5e/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Purple_60ft_2800x400.webm`,
            '90ft': `${prefix}/JB2A_DnD5e/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Purple_90ft_4000x400.webm`
        },
    }
    freeDatabase.electric_arc = {
        '01': `${prefix}/JB2A_DnD5e/Library/Generic/Lightning/ElectricArc01_01_Regular_Blue_1600x500.webm`,
        '02': `${prefix}/JB2A_DnD5e/Library/Generic/Lightning/ElectricArc02_01_Regular_Blue_1600x500.webm`,
        '03': `${prefix}/JB2A_DnD5e/Library/Generic/Lightning/ElectricArc03_01_Regular_Blue_1600x500.webm`,
        '04': `${prefix}/JB2A_DnD5e/Library/Generic/Lightning/ElectricArc04_01_Regular_Blue_1600x500.webm`
    }
    freeDatabase.energy_attack = {
        '01': {
            blue: [
                `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyAttack_01_01_Regular_Blue_1000x1000.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyAttack_01_02_Regular_Blue_1000x1000.webm`
            ]
        }
    }
    freeDatabase.energy_beam = {
        _template: 'ranged',
        normal: {
            blue: {
                '01': {
                    '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyBeam_01_Regular_Blue_15ft_1000x400.webm`,
                    '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyBeam_01_Regular_Blue_30ft_1600x400.webm`,
                    '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyBeam_01_Regular_Blue_60ft_2800x400.webm`,
                    '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyBeam_01_Regular_Blue_90ft_4000x400.webm`
                }
            },
            bluepink: {
                '02': {
                    '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyBeam_02_Regular_BluePink_05ft_600x400.webm`,
                    '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyBeam_02_Regular_BluePink_15ft_1000x400.webm`,
                    '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyBeam_02_Regular_BluePink_30ft_1600x400.webm`,
                    '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyBeam_02_Regular_BluePink_60ft_2800x400.webm`,
                    '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyBeam_02_Regular_BluePink_90ft_4000x400.webm`
                },
                '03': {
                    '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyBeam_03_Regular_BluePink_05ft_600x400.webm`,
                    '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyBeam_03_Regular_BluePink_15ft_1000x400.webm`,
                    '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyBeam_03_Regular_BluePink_30ft_1600x400.webm`,
                    '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyBeam_03_Regular_BluePink_60ft_2800x400.webm`,
                    '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyBeam_03_Regular_BluePink_90ft_4000x400.webm`
                }
            },
        }
    },
        freeDatabase.energy_conduit = {
            _template: 'ranged',
            bluepurple: {
                circle: {
                    '01': {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyConduitCircle_01_Regular_BluePurple_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyConduitCircle_01_Regular_BluePurple_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyConduitCircle_01_Regular_BluePurple_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyConduitCircle_01_Regular_BluePurple_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyConduitCircle_01_Regular_BluePurple_90ft_4000x400.webm`
                    }
                }
            }
        }
    freeDatabase.energy_field = {
        '01': {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyField_01_Regular_Blue_600x600.webm`
        },
        '02': {
            below: {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyFieldBot_02_Regular_Blue_400x400.webm`
            },
            above: {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyFieldTop_02_Regular_Blue_400x400.webm`
            }
        }
    }
    freeDatabase.energy_strands = {
        in: {
            green: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrandIN01_01_Regular_Green_600x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrandIN01_02_Regular_Green_600x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrandIN01_03_Regular_Green_600x600.webm`
                ]
            }
        },
        complete: {
            blue: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/EnergyStrands_01_Regular_Blue_600x600.webm`
            },
        },
        overlay: {
            blue: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/EnergyStrandsOverlay_01_Regular_Blue_600x600.webm`
            },
        },
        range: {
            _template: 'ranged',
            standard: {
                purple: {
                    '01': {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_01_Regular_Purple_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_01_Regular_Purple_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_01_Regular_Purple_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_01_Regular_Purple_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_01_Regular_Purple_90ft_4000x400.webm`,
                    },
                    '02': {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_02_Regular_Purple_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_02_Regular_Purple_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_02_Regular_Purple_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_02_Regular_Purple_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_02_Regular_Purple_90ft_4000x400.webm`
                    },
                    '03': {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_03_Regular_Purple_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_03_Regular_Purple_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_03_Regular_Purple_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_03_Regular_Purple_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_03_Regular_Purple_90ft_4000x400.webm`
                    },
                    '04': {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_04_Regular_Purple_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_04_Regular_Purple_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_04_Regular_Purple_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_04_Regular_Purple_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_04_Regular_Purple_90ft_4000x400.webm`
                    }
                }
            },
            multiple: {
                _template: 'ranged',
                purple: {
                    '01': {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Purple_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Purple_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Purple_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Purple_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Purple_90ft_4000x400.webm`
                    }
                },
                bluepink: {
                    '02': {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_Multiple02_Regular_BluePink_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_Multiple02_Regular_BluePink_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_Multiple02_Regular_BluePink_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_Multiple02_Regular_BluePink_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_Multiple02_Regular_BluePink_90ft_4000x400.webm`
                    }
                }
            }
        },
        '02': {
            marker: {
                bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/EnergyStrands02_01_Regular_BluePurple_400x400.webm`
            }
        }
    }
    freeDatabase.energy_wall = {
        '01': {
            '05x05ft': {
                '01': {
                    complete: {
                        orange: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyWall01_01_Regular_Orange_05x05ft_Complete_400x400.webm`
                    },
                    loop: {
                        orange: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyWall01_01_Regular_Orange_05x05ft_Loop_400x400.webm`
                    }
                }
            },
            '10x05ft': {
                '01': {
                    complete: {
                        orange: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyWall01_01_Regular_Orange_10x05ft_Complete_800x400.webm`
                    },
                    loop: {
                        orange: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyWall01_01_Regular_Orange_10x05ft_Loop_800x400.webm`
                    }
                }
            },
            '15x05ft': {
                '01': {
                    complete: {
                        orange: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyWall01_01_Regular_Orange_15x05ft_Complete_1000x400.webm`
                    },
                    loop: {
                        orange: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyWall01_01_Regular_Orange_15x05ft_Loop_1000x400.webm`
                    }
                }
            },
            '25x05ft': {
                '01': {
                    complete: {
                        orange: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyWall01_01_Regular_Orange_25x05ft_Complete_1400x400.webm`
                    },
                    loop: {
                        orange: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyWall01_01_Regular_Orange_25x05ft_Loop_1400x400.webm`
                    }
                }
            },
            'circle': {
                '500x500': {
                    '01': {
                        complete: {
                            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyWall01_01_Regular_Orange_Circle_Complete_500x500.webm`
                        },
                        loop: {
                            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyWall01_01_Regular_Orange_Circle_Loop_500x500.webm`
                        }
                    }
                },
                '900x900': {
                    '01': {
                        complete: {
                            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyWall01_01_Regular_Orange_Circle_Complete_900x900.webm`
                        },
                        loop: {
                            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/EnergyWall01_01_Regular_Orange_Circle_Loop_900x900.webm`
                        }
                    }
                }
            }
        }


    }
    freeDatabase.eruption = {
        orange: {
            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Eruption_01_Regular_Orange_600x600.webm`
        }
    }
    freeDatabase.entangle = {
        brown: `${prefix}/JB2A_DnD5e/Library/1st_Level/Entangle/Entangle_01_Brown_400x400.webm`,
        green: `${prefix}/JB2A_DnD5e/Library/1st_Level/Entangle/Entangle_01_Green_400x400.webm`,
        yellow: `${prefix}/JB2A_DnD5e/Library/1st_Level/Entangle/Entangle_01_Yellow_400x400.webm`,
        '02': {
            complete: {
                _markers: {
                    loop: { start: 2125, end: 6250 }
                },
                '02': {
                    green: `${prefix}/JB2A_DnD5e/Library/1st_Level/Entangle/Entangle02_02_Regular_Green_500x500.webm`
                }
            },
            loop: {
                '02': {
                    green: `${prefix}/JB2A_DnD5e/Library/1st_Level/Entangle/EntangleLoop02_02_Regular_Green_500x500.webm`
                }
            }
        }
    }
    freeDatabase.explosion = {
        '01': {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Explosion/Explosion_01_Orange_400x400.webm`
        },
        '02': {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Explosion/Explosion_02_Blue_400x400.webm`
        },
        '03': {
            blueyellow: `${prefix}/JB2A_DnD5e/Library/Generic/Explosion/Explosion_03_Regular_BlueYellow_400x400.webm`
        },
        '04': {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Explosion/Explosion_04_Regular_Blue_400x400.webm`
        },
        '08': {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Explosion/Explosion_05_Regular_Orange_400x400.webm`
        },
        side_fracture: {
            flask: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Explosion/SideFractureFlask01_01_800x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Explosion/SideFractureFlask01_02_400x400.webm`
                ]
            }
        },
        shrapnel: {
            bomb: {
                '01': {
                    black: `${prefix}/JB2A_DnD5e/Library/Generic/Explosion/ShrapnelBomb01_01_Regular_Black_800x800.webm`
                }
            }
        },
        top_fracture: {
            flask: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Explosion/TopFractureFlask01_01_400x400.webm`,
            }
        }
    }
    freeDatabase.explosion_side = {
        '01': {
            orange: [
                `${prefix}/JB2A_DnD5e/Library/Generic/Explosion/SideExplosion01_01_Regular_Orange_600x600.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Explosion/SideExplosion01_02_Regular_Orange_600x600.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Explosion/SideExplosion01_03_Regular_Orange_600x600.webm`
            ]
        }
    }
    freeDatabase.extras = {
        tmfx: {
            border: {
                circle: {
                    inpulse: {
                        '01': {
                            normal: `${prefix}/JB2A_DnD5e/Library/TMFX/Border/Circle/BorderInPulse_01_Circle_Normal_500.webm`
                        },
                        '02': {
                            normal: `${prefix}/JB2A_DnD5e/Library/TMFX/Border/Circle/BorderInPulse_02_Circle_Normal_500.webm`
                        }
                    },
                    outpulse: {
                        '01': {
                            normal: `${prefix}/JB2A_DnD5e/Library/TMFX/Border/Circle/BorderOutPulse_01_Circle_Normal_500.webm`
                        },
                        '02': {
                            normal: `${prefix}/JB2A_DnD5e/Library/TMFX/Border/Circle/BorderOutPulse_02_Circle_Normal_500.webm`
                        }
                    },
                    simple: {
                        '01': `${prefix}/JB2A_DnD5e/Library/TMFX/Border/Circle/BorderSimple_01_Circle_Normal_500.webm`,
                        '02': `${prefix}/JB2A_DnD5e/Library/TMFX/Border/Circle/BorderSimple_02_Circle_Normal_500.webm`,
                        '03': `${prefix}/JB2A_DnD5e/Library/TMFX/Border/Circle/BorderSimple_03_Circle_Normal_500.webm`,
                        '04': `${prefix}/JB2A_DnD5e/Library/TMFX/Border/Circle/BorderSimple_04_Circle_Normal_500.webm`
                    }
                }
            },
            inflow: {
                circle: {
                    '01': `${prefix}/JB2A_DnD5e/Library/TMFX/InFlow/Circle/InFlow_01_Circle_500x500.webm`
                }
            },
            inpulse: {
                circle: {
                    '01': {
                        normal: `${prefix}/JB2A_DnD5e/Library/TMFX/InPulse/Circle/InPulse_01_Circle_Normal_500.webm`
                    },
                    '02': {
                        normal: `${prefix}/JB2A_DnD5e/Library/TMFX/InPulse/Circle/InPulse_02_Circle_Normal_500.webm`
                    },
                    '03': {
                        normal: `${prefix}/JB2A_DnD5e/Library/TMFX/InPulse/Circle/InPulse_03_Circle_Normal_500.webm`
                    },
                    '04': {
                        normal: `${prefix}/JB2A_DnD5e/Library/TMFX/InPulse/Circle/InPulse_04_Circle_Normal_500.webm`
                    }
                }
            },
            outflow: {
                circle: {
                    '01': `${prefix}/JB2A_DnD5e/Library/TMFX/OutFlow/Circle/OutFlow_01_Circle_500x500.webm`,
                },
            },
            outpulse: {
                circle: {
                    '01': {
                        normal: `${prefix}/JB2A_DnD5e/Library/TMFX/OutPulse/Circle/OutPulse_01_Circle_Normal_500.webm`,
                    },
                    '02': {
                        normal: `${prefix}/JB2A_DnD5e/Library/TMFX/OutPulse/Circle/OutPulse_02_Circle_Normal_500.webm`,
                    },
                    '03': {
                        normal: `${prefix}/JB2A_DnD5e/Library/TMFX/OutPulse/Circle/OutPulse_03_Circle_Normal_500.webm`,
                    },
                    '04': {
                        normal: `${prefix}/JB2A_DnD5e/Library/TMFX/OutPulse/Circle/OutPulse_04_Circle_Normal_500.webm`,
                    }
                },
                cone: {
                    '01': {
                        normal: `${prefix}/JB2A_DnD5e/Library/TMFX/OutPulse/Cone/OutPulse_01_Cone_Normal_500.webm`
                    },
                    '02': {
                        normal: `${prefix}/JB2A_DnD5e/Library/TMFX/OutPulse/Cone/OutPulse_02_Cone_Normal_500.webm`
                    },
                    '03': {
                        normal: `${prefix}/JB2A_DnD5e/Library/TMFX/OutPulse/Cone/OutPulse_03_Cone_Normal_500.webm`
                    },
                    '04': {
                        normal: `${prefix}/JB2A_DnD5e/Library/TMFX/OutPulse/Cone/OutPulse_04_Cone_Normal_500.webm`
                    }
                },
                line: {
                    '01': {
                        normal: `${prefix}/JB2A_DnD5e/Library/TMFX/OutPulse/Line/OutPulse_01_Line_Normal_500.webm`
                    },
                    '02': {
                        normal: `${prefix}/JB2A_DnD5e/Library/TMFX/OutPulse/Line/OutPulse_02_Line_Normal_500.webm`
                    },
                    '03': {
                        normal: `${prefix}/JB2A_DnD5e/Library/TMFX/OutPulse/Line/OutPulse_03_Line_Normal_500.webm`
                    },
                    '04': {
                        normal: `${prefix}/JB2A_DnD5e/Library/TMFX/OutPulse/Line/OutPulse_04_Line_Normal_500.webm`
                    }
                }
            },
            radar: {
                circle: {
                    loop: {
                        '01': {
                            normal: `${prefix}/JB2A_DnD5e/Library/TMFX/Radar/Circle/RadarLoop_01_Circle_Normal_500x500.webm`
                        }
                    },
                    pulse: {
                        '01': {
                            normal: `${prefix}/JB2A_DnD5e/Library/TMFX/Radar/Circle/RadarPulse_01_Circle_Normal_500x500.webm`,
                        }
                    }
                }
            },
            runes: {
                circle: {
                    simple: {
                        abjuration: `${prefix}/JB2A_DnD5e/Library/TMFX/Runes/Circle/AbjurationSimple_01_Circle_Normal_500.webm`,
                        conjuration: `${prefix}/JB2A_DnD5e/Library/TMFX/Runes/Circle/ConjurationSimple_01_Circle_Normal_500.webm`,
                        divination: `${prefix}/JB2A_DnD5e/Library/TMFX/Runes/Circle/DivinationSimple_01_Circle_Normal_500.webm`,
                        enchantment: `${prefix}/JB2A_DnD5e/Library/TMFX/Runes/Circle/EnchantmentSimple_01_Circle_Normal_500.webm`,
                        evocation: `${prefix}/JB2A_DnD5e/Library/TMFX/Runes/Circle/EvocationSimple_01_Circle_Normal_500.webm`,
                        illusion: `${prefix}/JB2A_DnD5e/Library/TMFX/Runes/Circle/IllusionSimple_01_Circle_Normal_500.webm`,
                        necromancy: `${prefix}/JB2A_DnD5e/Library/TMFX/Runes/Circle/NecromancySimple_01_Circle_Normal_500.webm`,
                        transmutation: `${prefix}/JB2A_DnD5e/Library/TMFX/Runes/Circle/TransmutationSimple_01_Circle_Normal_500.webm`
                    }
                }
            }
        }
    }
    freeDatabase.eyes = {
        '01': {
            dark_green: {
                single: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Eyes/Eyes_Single01_01_Dark_Green_300x300.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Eyes/Eyes_Single01_02_Dark_Green_300x300.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Eyes/Eyes_Single01_03_Dark_Green_300x300.webm`
                ],
                few: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Eyes/Eyes_Few01_01_Dark_Green_600x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Eyes/Eyes_Few01_02_Dark_Green_600x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Eyes/Eyes_Few01_03_Dark_Green_600x600.webm`
                ],
                many: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Eyes/Eyes_Many01_01_Dark_Green_600x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Eyes/Eyes_Many01_02_Dark_Green_600x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Eyes/Eyes_Many01_03_Dark_Green_600x600.webm`
                ]
            }
        }
    }
    freeDatabase.fairies = {
        complete: {
            _markers: {
                loop: { start: 3033, end: 6000 }
            },
            '01': {
                bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Creature/FairiesComplete01_01_Regular_BluePurple_600x600.webm`
            }
        },
        loop: {
            '01': {
                bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Creature/FairiesLoop01_01_Regular_BluePurple_600x600.webm`
            }
        },
        inward: {
            '01': {
                bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Creature/FairiesInward01_01_Regular_BluePurple_600x600.webm`
            }
        },
        inward_burst: {
            '01': {
                bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Creature/FairiesInwardBurst01_01_Regular_BluePurple_600x600.webm`
            }
        },
        outward: {
            '01': {
                bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Creature/FairiesOutward01_01_Regular_BluePurple_600x600.webm`
            }
        },
        outward_burst: {
            '01': {
                bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Creature/FairiesOutwardBurst01_01_Regular_BluePurple_400x400.webm`
            }
        }
    }
    freeDatabase.falchion = {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Falchion01_01_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Falchion01_02_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Falchion01_03_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Falchion01_04_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Falchion01_05_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Falchion01_06_Regular_White_800x600.webm`
                ]
            }
        }
    }
    freeDatabase.falling_rocks = {
        endframe: {
            side: {
                '1x1': {
                    grey: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Grey_05x05ft_Endframe.webp`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Grey_05x05ft_Endframe.webp`
                    ]
                },
                '2x1': {
                    grey: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Grey_10x05ft_Endframe.webp`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Grey_10x05ft_Endframe.webp`
                    ]
                }
            },
            top: {
                '1x1': {
                    grey: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Grey_05x05ft_Endframe.webp`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Grey_05x05ft_Endframe.webp`
                    ]
                },
                '2x1': {
                    grey: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Grey_10x05ft_Endframe.webp`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Grey_10x05ft_Endframe.webp`
                    ]
                }
            }
        },
        side: {
            '1x1': {
                grey: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Grey_05x05ft_600x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Grey_05x05ft_600x600.webm`
                ]
            },
            '2x1': {
                grey: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Grey_10x05ft_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Grey_10x05ft_800x600.webm`
                ]
            }
        },
        top: {
            '1x1': {
                grey: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Grey_05x05ft_600x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Grey_05x05ft_600x600.webm`
                ]
            },
            '2x1': {
                grey: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Grey_10x05ft_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Grey_10x05ft_800x600.webm`
                ]
            }
        }
    }
    freeDatabase.fireball = {
        _template: 'cone100',
        loop_debris: {
            orange: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Fireball/FireballLoop_01_Orange_800x800.webm`,
        },
        loop_no_debris: {
            orange: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Fireball/FireballLoopNoDebris_01_Orange_800x800.webm`,
        },
        explosion: {
            orange: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Fireball/FireballExplosion_01_Orange_800x800.webm`,
        },
        beam: {
            _template: 'ranged',
            orange: {
                '05ft': `${prefix}/JB2A_DnD5e/Library/3rd_Level/Fireball/FireballBeam_01_Orange_05ft_600x400.webm`,
                '15ft': `${prefix}/JB2A_DnD5e/Library/3rd_Level/Fireball/FireballBeam_01_Orange_15ft_1000x400.webm`,
                '30ft': `${prefix}/JB2A_DnD5e/Library/3rd_Level/Fireball/FireballBeam_01_Orange_30ft_1600x400.webm`,
                '60ft': `${prefix}/JB2A_DnD5e/Library/3rd_Level/Fireball/FireballBeam_01_Orange_60ft_2800x400.webm`,
                '90ft': `${prefix}/JB2A_DnD5e/Library/3rd_Level/Fireball/FireballBeam_01_Orange_90ft_4000x400.webm`
            },
        }

    }
    freeDatabase.fire_bolt = {
        _template: 'ranged',
        orange: {
            '05ft': `${prefix}/JB2A_DnD5e/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Orange_05ft_600x400.webm`,
            '15ft': `${prefix}/JB2A_DnD5e/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Orange_15ft_1000x400.webm`,
            '30ft': `${prefix}/JB2A_DnD5e/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Orange_30ft_1600x400.webm`,
            '60ft': `${prefix}/JB2A_DnD5e/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Orange_60ft_2800x400.webm`,
            '90ft': `${prefix}/JB2A_DnD5e/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Orange_90ft_4000x400.webm`
        },
    }
    freeDatabase.fireflies = {
        few: {
            '01': {
                green: `${prefix}/JB2A_DnD5e/Library/Generic/Fireflies/Fireflies_01_Green_Few01_400x400.webm`
            },
            '02': {
                green: `${prefix}/JB2A_DnD5e/Library/Generic/Fireflies/Fireflies_01_Green_Few02_400x400.webm`,
            }
        },
        many: {
            '01': {
                green: `${prefix}/JB2A_DnD5e/Library/Generic/Fireflies/Fireflies_01_Green_Many01_400x400.webm`,
            },
            '02': {
                green: `${prefix}/JB2A_DnD5e/Library/Generic/Fireflies/Fireflies_01_Green_Many02_400x400.webm`,
            }
        }
    }
    freeDatabase.fire_jet = {
        orange: {
            '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Fire/FireJet_01_Orange_15ft_600x200.webm`,
            '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Fire/FireJet_01_Orange_30ft_1200x200.webm`
        }
    }
    freeDatabase.fire_ring = {
        '500px': {
            red: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/FireRing_01_Circle_Red_500.webm`
        },
        '900px': {
            red: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/FireRing_01_Circle_Red_900.webm`
        }
    }
    freeDatabase.fire_trap = {
        '01': {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Traps/FireTrap01_01_Regular_Orange_1000x1000.webm`
        },
        '02': {
            single: {
                orange: `${prefix}/JB2A_DnD5e/Library/Generic/Traps/FireTrap02_01_Regular_Orange_1400x1400.webm`
            }
        }
    },
        freeDatabase.firework = {
            '01': {
                orangeyellow: {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/Fireworks/Firework01_01_Regular_OrangeYellow_600x600.webm`,
                    '03': `${prefix}/JB2A_DnD5e/Library/Generic/Fireworks/Firework03_01_Regular_OrangeYellow_600x600.webm`
                },
                yellow: {
                    '02': `${prefix}/JB2A_DnD5e/Library/Generic/Fireworks/Firework02_01_Regular_Yellow_600x600.webm`
                }
            },
            '02': {
                orangeyellow: {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/Fireworks/Firework01_02_Regular_OrangeYellow_600x600.webm`,
                    '03': `${prefix}/JB2A_DnD5e/Library/Generic/Fireworks/Firework03_02_Regular_OrangeYellow_600x600.webm`
                },
                yellow: {
                    '02': `${prefix}/JB2A_DnD5e/Library/Generic/Fireworks/Firework02_02_Regular_Yellow_600x600.webm`
                }
            }
        }
    freeDatabase.flames = {
        '01': {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Flame/Flames_01_Regular_Orange_200x200.webm`
        },
        '02': {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Flame/Flames_02_Regular_Orange_400x400.webm`
        },
        '04': {
            complete: {
                _markers: {
                    loop: { start: 3000, end: 7967 }
                },
                orange: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Flame/Flames04_01_Regular_Orange_Complete_400x600.webm`
            },
            loop: {
                orange: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Flame/Flames04_01_Regular_Orange_Loop_400x600.webm`
            },
        },
        orange: {
            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Flame/Flames_01_Regular_Orange_200x200.webm`,
            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Flame/Flames_02_Regular_Orange_400x400.webm`,
            '03': {
                '1x1': `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Flame/Flames03_01_Regular_Orange_05x05ft_300x300.webm`,
                '2x1': `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Flame/Flames03_01_Regular_Orange_10x05ft_400x300.webm`,
                '2x2': `${prefix}/JB2A_DnD5e/Library/Generic/Fire/Flame/Flames03_01_Regular_Orange_10x10ft_400x400.webm`
            }
        }
    }
    freeDatabase.flaming_sphere = {
        //TO BE REMOVED [-->
        blue: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Blue_200x200.webm`,
        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Green_200x200.webm`,
        greenblue: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/Multicoloured/FlamingSphere_01_GreenToBlue_200x200.webm`,
        orange: {
            '01': `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Orange_200x200.webm`,
            '02': `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_02_Orange_200x200.webm`
        },
        pink: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Pink_200x200.webm`,
        purple: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Purple_200x200.webm`,
        rainbow: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/Multicoloured/FlamingSphere_01_Rainbow_200x200.webm`,
        red: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Red_200x200.webm`,
        //TO BE REMOVED <--]
        '200px': {
            blue: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Blue_200x200.webm`,
            green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Green_200x200.webm`,
            greenblue: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/Multicoloured/FlamingSphere_01_GreenToBlue_200x200.webm`,
            orange: {
                '01': `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Orange_200x200.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_02_Orange_200x200.webm`
            },
            pink: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Pink_200x200.webm`,
            purple: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Purple_200x200.webm`,
            rainbow: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/Multicoloured/FlamingSphere_01_Rainbow_200x200.webm`,
            red: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Red_200x200.webm`
        },
        '400px': {
            orange: {
                '02': `${prefix}/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_02_Orange_400x400.webm`
            }
        }
    }
    freeDatabase.flurry_of_blows = {
        _template: 'melee',
        magical: {
            '01': {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Magical01_800x600.webm`
            },
            '02': {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Magical02_800x600.webm`
            }
        },
        physical: {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Physical01_800x600.webm`
        }
    }
    freeDatabase.fog_cloud = {
        '01': {
            white: `${prefix}/JB2A_DnD5e/Library/1st_Level/Fog_Cloud/FogCloud_01_White_800x800.webm`,
        }
    }
    freeDatabase.footprints = {
        shoe: {
            black: `${prefix}/JB2A_DnD5e/Library/Generic/FootPrint/ShoePrint_01_Black_200x200.webm`,
            grey: `${prefix}/JB2A_DnD5e/Library/Generic/FootPrint/ShoePrint_01_Grey_200x200.webm`
        }
    }
    freeDatabase.fumes = {
        steam: {
            white: `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/Fumes_02_Steam_White_400x400.webm`
        },
        '04': {
            complete: {
                _markers: {
                    loop: { start: 3000, end: 7967 }
                },
                grey: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/Fumes04_01_Grey_Complete_400x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/Fumes04_02_Grey_Complete_400x600.webm`
                ]
            },
            loop: {
                grey: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/Fumes04_01_Grey_Loop_400x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/Fumes04_02_Grey_Loop_400x600.webm`
                ]
            }
        }
    }
    freeDatabase.glaive = {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Glaive01_01_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Glaive01_02_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Glaive01_03_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Glaive01_04_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Glaive01_05_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Glaive01_06_Regular_White_800x600.webm`
                ]
            }
        }
    }
    freeDatabase.glint = {
        yellow: {
            few: [
                `${prefix}/JB2A_DnD5e/Library/Generic/Item/GlintFew01_01_Regular_Yellow_200x200.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Item/GlintFew01_02_Regular_Yellow_200x200.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Item/GlintFew01_03_Regular_Yellow_200x200.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Item/GlintFew01_04_Regular_Yellow_200x200.webm`,
            ],
            many: [
                `${prefix}/JB2A_DnD5e/Library/Generic/Item/GlintMany01_01_Regular_Yellow_200x200.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Item/GlintMany01_02_Regular_Yellow_200x200.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Item/GlintMany01_03_Regular_Yellow_200x200.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Item/GlintMany01_04_Regular_Yellow_200x200.webm`,
            ]
        }
    }
    freeDatabase.grease = {
        _template: 'large',
        dark_brown: {
            loop: `${prefix}/JB2A_DnD5e/Library/1st_Level/Grease/Grease_Dark_Brown_600x600.webm`
        }

    }
    freeDatabase.greataxe = {
        melee: {
            _template: 'melee',
            standard: {
                white: `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/GreatAxe01_01_Regular_White_800x600.webm`
            }
        }
    }
    freeDatabase.greatclub = {
        _template: 'melee',
        standard: {
            white: `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/GreatClub01_01_Regular_White_800x600.webm`
        }
    }
    freeDatabase.greatsword = {
        melee: {
            _template: 'melee',
            standard: {
                white: `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/GreatSword01_01_Regular_White_800x600.webm`
            }
        }
    }
    freeDatabase.ground_cracks = {
        orange: {
            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Fire/GroundCrackLoop_01_Regular_Orange_600x600.webm`,
            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Fire/GroundCrackLoop_02_Regular_Orange_600x600.webm`,
            '03': `${prefix}/JB2A_DnD5e/Library/Generic/Fire/GroundCrackLoop_03_Regular_Orange_600x600.webm`
        },
        '01': {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/GroundCrackLoop_01_Regular_Orange_600x600.webm`
        },
        '02': {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/GroundCrackLoop_02_Regular_Orange_600x600.webm`
        },
        '03': {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/GroundCrackLoop_03_Regular_Orange_600x600.webm`
        }
    }
    freeDatabase.guiding_bolt = {
        _template: 'ranged',
        '01': {
            blueyellow: {
                '05ft': `${prefix}/JB2A_DnD5e/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_05ft_600x400.webm`,
                '15ft': `${prefix}/JB2A_DnD5e/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_15ft_1000x400.webm`,
                '30ft': `${prefix}/JB2A_DnD5e/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_30ft_1600x400.webm`,
                '60ft': `${prefix}/JB2A_DnD5e/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_60ft_2800x400.webm`,
                '90ft': `${prefix}/JB2A_DnD5e/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_90ft_4000x400.webm`
            }
        },
    }
    freeDatabase.gust_of_wind = {
        _template: 'ray',
        default: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Gust_Of_Wind/GustOfWind_01_White_1200x200.webm`,
        veryfast: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Gust_Of_Wind/GustOfWind_01_White_VeryFast_1200x200.webm`
    }
    freeDatabase.halberd = {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Halberd01_01_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Halberd01_02_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Halberd01_03_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Halberd01_04_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Halberd01_05_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Halberd01_06_Regular_White_800x600.webm`
                ]
            }
        }
    }
    freeDatabase.hammer = {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Hammer01_01_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Hammer01_02_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Hammer01_03_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Hammer01_04_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Hammer01_05_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Hammer01_06_Regular_White_800x600.webm`
                ]
            }
        }
    }
    freeDatabase.handaxe = {
        melee: {
            _template: 'melee',
            standard: {
                white: `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/HandAxe02_01_Regular_White_800x600.webm`
            }
        }
    }
    freeDatabase.healing_generic = {
        '200px': {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_01_Blue_200x200.webm`,
            green: `${prefix}/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_01_Green_200x200.webm`,
            purple: `${prefix}/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_01_Purple_200x200.webm`,
            yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_01_Yellow_200x200.webm`
        },
        '400px': {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_01_Blue_400x400.webm`,
            green: `${prefix}/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_01_Green_400x400.webm`,
            purple: `${prefix}/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_01_Purple_400x400.webm`,
            yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_01_Yellow_400x400.webm`
        },
        burst: {
            greenorange: `${prefix}/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_02_Regular_GreenOrange_Burst_600x600.webm`
        },
        loop: {
            greenorange: `${prefix}/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_02_Regular_GreenOrange_Loop_600x600.webm`
        },
        '03': {
            burst: {
                bluegreen: `${prefix}/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_03_Regular_BlueGreen_600x600.webm`
            }
        }
    }
    freeDatabase.hovering_laserweapon = {
        one_handed:{
            '01':{
                blue:{
                    '01': `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Lasersword1H01_01_Regular_Blue_400x400.webm`,
                }
            }
        },
        double_bladed:{
            '01':{
                blue:{
                    '01': `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Lasersword2H01_01_Regular_Blue_600x600.webm`,
                }
            }
        },
        spear:{
            '01':{
                blue:{
                    '01': `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Laserspear01_01_Regular_Blue_600x600.webm`
                }
            }
        }
    }
    freeDatabase.hunters_mark = {
        loop: {
            '01': {
                green: `${prefix}/JB2A_DnD5e/Library/1st_Level/Hunters_Mark/HuntersMark_01_Regular_Green_Loop_200x200.webm`
            }
        },
        pulse: {
            '01': {
                green: `${prefix}/JB2A_DnD5e/Library/1st_Level/Hunters_Mark/HuntersMark_01_Regular_Green_Pulse_200x200.webm`
            }
        }
    }
    freeDatabase.ice_spikes = {
        radial: {
            burst: {
                white: `${prefix}/JB2A_DnD5e/Library/Generic/Ice/IceSpikesRadialBurst_01_Regular_White_1000x1000.webm`
            },
            loop: {
                white: `${prefix}/JB2A_DnD5e/Library/Generic/Ice/IceSpikesRadialLoop_01_Regular_White_1000x1000.webm`
            }
        },
        wall: {
            burst: {
                white: `${prefix}/JB2A_DnD5e/Library/Generic/Ice/IceSpikesWallBurst_01_Regular_White_600x1000.webm`
            },
            loop: {
                white: `${prefix}/JB2A_DnD5e/Library/Generic/Ice/IceSpikesWallLoop_01_Regular_White_600x1000.webm`
            }
        }
    }
    freeDatabase.icon = {
        drop: {
            red: `${prefix}/JB2A_DnD5e/Library/Generic/UI/IconDrop_01_Regular_Red_200x200.webm`

        },
        fear: {
            dark_purple: `${prefix}/JB2A_DnD5e/Library/Generic/UI/IconFear_01_Dark_Purple_200x200.webm`

        },
        heart: {
            pink: `${prefix}/JB2A_DnD5e/Library/Generic/UI/IconHeart_01_Regular_Pink_200x200.webm`

        },
        horror: {
            purple: `${prefix}/JB2A_DnD5e/Library/Generic/UI/IconHorror_01_Regular_Purple_200x200.webm`

        },
        music_note: {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/UI/IconMusicNote_01_Regular_Blue_200x200.webm`
        },
        mute: {
            dark_red: `${prefix}/JB2A_DnD5e/Library/Generic/UI/IconMute_01_Dark_Red_200x200.webm`
        },
        poison: {
            dark_green: `${prefix}/JB2A_DnD5e/Library/Generic/UI/IconPoison_01_Dark_Green_200x200.webm`

        },
        runes: {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/UI/IconRunes_01_Regular_Orange_200x200.webm`

        },
        runes02: {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/UI/IconRunes02_01_Regular_Orange_200x200.webm`

        },
        runes03: {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/UI/IconRunes03_01_Regular_Orange_200x200.webm`

        },
        shield: {
            green: `${prefix}/JB2A_DnD5e/Library/Generic/UI/IconShield_01_Regular_Green_200x200.webm`

        },
        shield_cracked: {
            purple: `${prefix}/JB2A_DnD5e/Library/Generic/UI/IconShieldCracked_01_Regular_Purple_200x200.webm`

        },
        skull: {
            purple: `${prefix}/JB2A_DnD5e/Library/Generic/UI/IconSkull_01_Regular_Purple_200x200.webm`

        },
        snowflake: {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/UI/IconSnowflake_01_Regular_Blue_200x200.webm`

        },
        stun: {
            purple: `${prefix}/JB2A_DnD5e/Library/Generic/UI/IconStun_01_Regular_Purple_200x200.webm`

        }
    }
    freeDatabase.icosahedron = {
        simple: {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/Icosahedron_01_Regular_Blue_600x600.webm`
        },
        roll: {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/IcosahedronRoll_01_Regular_Blue_600x600.webm`
        },
        rune: {
            above: {
                blueyellow: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/IcosahedronRuneAbove_01_Regular_BlueYellow_600x600.webm`
            },
            below: {

                blueyellow: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/IcosahedronRuneBelow_01_Regular_BlueYellow_600x600.webm`
            }
        },
        star: {
            above: {
                blueyellow: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/IcosahedronStarAbove_01_Regular_BlueYellow_600x600.webm`
            },
            below: {
                blueyellow: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/IcosahedronStarBelow_01_Regular_BlueYellow_600x600.webm`
            }
        }
    }
    freeDatabase.impact = {
        '001': {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_01_Regular_Blue_400x400.webm`
        },
        '002': {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_02_Regular_Blue_400x400.webm`
        },
        '003': {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_03_Regular_Blue_400x400.webm`
        },
        '004': {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_04_Regular_Blue_400x400.webm`
        },
        '005': {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_05_Regular_Orange_400x400.webm`
        },
        '006': {
            yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_06_Regular_Yellow_400x400.webm`
        },
        '007': {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_07_Regular_Orange_400x400.webm`,
            yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_07_Regular_Yellow_400x400.webm`
        },
        '008': {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_08_Regular_Orange_400x400.webm`
        },
        '009': {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_09_Regular_Orange_400x400.webm`
        },
        '010': {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_10_Regular_Orange_400x400.webm`
        },
        '011': {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_11_Regular_Blue_400x400.webm`
        },
        '012': {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_12_Regular_Blue_400x400.webm`
        },
        blue: [
            `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_01_Regular_Blue_400x400.webm`,
            `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_02_Regular_Blue_400x400.webm`,
            `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_03_Regular_Blue_400x400.webm`,
            `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_04_Regular_Blue_400x400.webm`,
            `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_11_Regular_Blue_400x400.webm`,
            `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_12_Regular_Blue_400x400.webm`
        ],
        ground_crack: {
            orange: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_01_Regular_Orange_600x600.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_02_Regular_Orange_600x600.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_03_Regular_Orange_600x600.webm`
            },
            '01': {
                orange: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_01_Regular_Orange_600x600.webm`,
            },
            '02': {
                orange: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_02_Regular_Orange_600x600.webm`,
            },
            '03': {
                orange: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_03_Regular_Orange_600x600.webm`,
            },
            still_frame: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_01_StillFrame.webp`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_02_StillFrame.webp`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_03_StillFrame.webp`
            },
            frost: {
                '01': {
                    white: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/GroundCrackFrostImpact_01_Regular_White_600x600.webm`,
                }
            }
        },
        fire: {
            '01': {
                orange: [`${prefix}/JB2A_DnD5e/Library/Generic/Impact/ImpactFire01_01_Regular_Orange_600x600.webm`]
            }
        },
        frost: {
            white: {
                '01': `${prefix}/JB2A_DND5e/Library/Generic/Impact/FrostImpact_01_Regular_White_600x600.webm`,
            },
        },
        orange: [
            `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_05_Regular_Orange_400x400.webm`,
            `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_07_Regular_Orange_400x400.webm`,
            `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_08_Regular_Orange_400x400.webm`,
            `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_09_Regular_Orange_400x400.webm`,
            `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_10_Regular_Orange_400x400.webm`,
            `${prefix}/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_01_Regular_Orange_600x600.webm`,
            `${prefix}/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_02_Regular_Orange_600x600.webm`,
            `${prefix}/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_03_Regular_Orange_600x600.webm`,
        ],
        water: {
            "02": {
                blue: [`${prefix}/JB2A_DnD5e/Library/Generic/Impact/ImpactWater02_01_Regular_Blue_600x600.webm`]
            }
        },
        yellow: [
            `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_06_Regular_Yellow_400x400.webm`,
            `${prefix}/JB2A_DnD5e/Library/Generic/Impact/Impact_07_Regular_Yellow_400x400.webm`
        ]
    }
    freeDatabase.impact_themed = {
        ice_shard: {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/ImpactIceShard01_01_Regular_Blue_400x400.webm`
        }
    }
    freeDatabase.ioun_stones = {
        '01': {
            blue: {
                awareness: `${prefix}/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Awarness_Blue_200x200.webm`,
                insight: `${prefix}/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Insight_Blue_200x200.webm`,
                strength: `${prefix}/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Strength_Blue_200x200.webm`
            },
            green: {
                mastery: `${prefix}/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Mastery_Green_200x200.webm`
            },
            pink: {
                fortitude: `${prefix}/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Fortitude_Pink_200x200.webm`,
                leadership: `${prefix}/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Leadership_Pink_200x200.webm`,
                protection: `${prefix}/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Protection_Pink_200x200.webm`
            },
            purple: {
                absorption: `${prefix}/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Absorption_Purple_200x200.webm`,
                great_absorption: `${prefix}/JB2A_DnD5e/Library/Generic/Item/IounStone_01_GreatAbsorption_Purple_200x200.webm`,
                reserve: `${prefix}/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Reserve_Purple_200x200.webm`
            },
            red: {
                agility: `${prefix}/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Agility_Red_200x200.webm`,
                intellect: `${prefix}/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Intellect_Red_200x200.webm`
            },
            white: {
                regeneration: `${prefix}/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Regeneration_White_200x200.webm`,
                sustenance: `${prefix}/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Sustenance_White_200x200.webm`
            }
        }
    }

    freeDatabase.lasershot = {
        _template: 'ranged',
        blue: {
            '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_05ft_600x400.webm`,
            '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_15ft_1000x400.webm`,
            '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_30ft_1600x400.webm`,
            '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_60ft_2800x400.webm`,
            '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_90ft_4000x400.webm`
        },
        green: {
            '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_05ft_600x400.webm`,
            '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_15ft_1000x400.webm`,
            '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_30ft_1600x400.webm`,
            '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_60ft_2800x400.webm`,
            '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_90ft_4000x400.webm`
        },
        orange: {
            '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_05ft_600x400.webm`,
            '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_15ft_1000x400.webm`,
            '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_30ft_1600x400.webm`,
            '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_60ft_2800x400.webm`,
            '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_90ft_4000x400.webm`
        },
        red: {
            '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_05ft_600x400.webm`,
            '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_15ft_1000x400.webm`,
            '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_30ft_1600x400.webm`,
            '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_60ft_2800x400.webm`,
            '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_90ft_4000x400.webm`
        }
    }
    freeDatabase.lasersword = {
        melee: {
            _template: 'melee',
            blue: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/LaserSword01_01_Regular_Blue_800x600.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/LaserSword01_02_Regular_Blue_800x600.webm`,
            }
        },
        throw: {
            _template: 'ranged',
            blue: {
                '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_15ft_1000x600.webm`,
                '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_30ft_1600x600.webm`,
                '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_60ft_2800x600.webm`,
                '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_90ft_4000x600.webm`
            }
        }
    }
    freeDatabase.lasersword_db = {
        throw: {
            _template: 'ranged',
            red: {
                '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_15ft_1000x600.webm`,
                '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_30ft_1600x600.webm`,
                '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_60ft_2800x600.webm`,
                '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_90ft_4000x600.webm`
            }
        }
    }
    freeDatabase.lightning_ball = {
        blue: `${prefix}/JB2A_DnD5e/Library/Generic/Lightning/LightningBall_01_Regular_Blue_400x400.webm`,
    }
    freeDatabase.lightning_bolt = {
        _template: 'ray',
        narrow: {
            blue: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Lightning_Bolt/LightningBolt_01_Regular_Blue_4000x200.webm`
        },
        wide: {
            blue: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Lightning_Bolt/LightningBolt_01_Regular_Blue_4000x400.webm`
        }
    }
    freeDatabase.lightning_orb = {
        "01": {
            loop: {
                bluepurple: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Lightning/LightningOrb01_01_BluePurple_Loop_600x600.webm`,
                ]
            }
        }
    }
    freeDatabase.lightning_strike = {
        blue: [
            `${prefix}/JB2A_DnD5e/Library/Generic/Lightning/LightningStrike01_01_Regular_Blue_800x800.webm`,
            `${prefix}/JB2A_DnD5e/Library/Generic/Lightning/LightningStrike01_02_Regular_Blue_800x800.webm`,
        ]
    }
    freeDatabase.liquid = {
        blob: {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Liquid/LiquidBlob01_01_Regular_Blue_400x400.webm`
        },
        splash: {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Liquid/LiquidSplash01_Regular_Blue_400x400.webm`
        },
        splash02: {
            red: `${prefix}/JB2A_DnD5e/Library/Generic/Liquid/LiquidSplash02_01_Regular_Red_500x500.webm`
        },
        splash_side: {
            _template: 'side_impact',
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Liquid/LiquidSplashSide01_Regular_Blue_600x600.webm`
        },
        splash_side02: {
            _template: 'side_impact',
            red: `${prefix}/JB2A_DnD5e/Library/Generic/Liquid/LiquidSplashSide02_01_Regular_Red_600x600.webm`
        }
    }
    freeDatabase.mace = {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Mace01_01_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Mace01_02_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Mace01_03_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Mace01_04_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Mace01_05_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Mace01_06_Regular_White_800x600.webm`
                ]
            }
        }
    }
    freeDatabase.magic_missile = {
        _template: 'ranged',
        purple: {
            '05ft': [
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_05ft_01_600x400.webm`,
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_05ft_02_600x400.webm`,
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_05ft_03_600x400.webm`,
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_05ft_04_600x400.webm`
            ],
            '15ft': [
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_15ft_01_1000x400.webm`,
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_15ft_02_1000x400.webm`,
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_15ft_03_1000x400.webm`,
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_15ft_04_1000x400.webm`
            ],
            '30ft': [
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_30ft_01_1600x400.webm`,
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_30ft_02_1600x400.webm`,
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_30ft_03_1600x400.webm`,
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_30ft_04_1600x400.webm`
            ],
            '60ft': [
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_60ft_01_2800x400.webm`,
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_60ft_02_2800x400.webm`,
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_60ft_03_2800x400.webm`,
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_60ft_04_2800x400.webm`
            ],
            '90ft': [
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_90ft_01_4000x400.webm`,
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_90ft_02_4000x400.webm`,
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_90ft_03_4000x400.webm`,
                `${prefix}/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_90ft_04_4000x400.webm`
            ]
        }
    }
    freeDatabase.magic_signs = {
        circle: {
            '01': {
                abjuration: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Abjuration_01_Blue_Circle_800x800.webm`,
                conjuration: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Conjuration_01_Yellow_Circle_800x800.webm`,
                divination: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Divination_01_Light_Blue_Circle_800x800.webm`,
            },
            '02': {
                abjuration: {
                    complete: {
                        _markers: {
                            loop: { start: 3000, end: 8000 },
                            forcedEnd: 8000
                        },
                        blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/AbjurationCircleComplete_02_Regular_Blue_800x800.webm`,
                        dark_blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/AbjurationCircleComplete_02_Dark_Blue_800x800.webm`
                    },
                    intro: {
                        dark_blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/AbjurationCircleIntro_02_Dark_Blue_800x800.webm`,
                        blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/AbjurationCircleIntro_02_Regular_Blue_800x800.webm`,
                    },
                    loop: {
                        dark_blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/AbjurationCircleLoop_02_Dark_Blue_800x800.webm`,
                        blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/AbjurationCircleLoop_02_Regular_Blue_800x800.webm`,
                    },
                    outro: {
                        dark_blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/AbjurationCircleOutro_02_Dark_Blue_800x800.webm`,
                        blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/AbjurationCircleOutro_02_Regular_Blue_800x800.webm`
                    }
                },
                conjuration: {
                    complete: {
                        _markers: {
                            loop: { start: 3000, end: 8000 },
                            forcedEnd: 8000
                        },
                        yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/ConjurationCircleComplete_02_Regular_Yellow_800x800.webm`,
                        dark_yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/ConjurationCircleComplete_02_Dark_Yellow_800x800.webm`,
                    },
                    intro: {
                        dark_yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/ConjurationCircleIntro_02_Dark_Yellow_800x800.webm`,
                        yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/ConjurationCircleIntro_02_Regular_Yellow_800x800.webm`,
                    },
                    loop: {
                        dark_yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/ConjurationCircleLoop_02_Dark_Yellow_800x800.webm`,
                        yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/ConjurationCircleLoop_02_Regular_Yellow_800x800.webm`,
                    },
                    outro: {
                        dark_yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/ConjurationCircleOutro_02_Dark_Yellow_800x800.webm`,
                        yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/ConjurationCircleOutro_02_Regular_Yellow_800x800.webm`
                    }
                },
                divination: {
                    complete: {
                        _markers: {
                            loop: { start: 3000, end: 8000 },
                            forcedEnd: 8000
                        },
                        blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/DivinationCircleComplete_02_Regular_Blue_800x800.webm`,
                        dark_blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/DivinationCircleComplete_02_Dark_Blue_800x800.webm`,
                    },
                    intro: {
                        dark_blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/DivinationCircleIntro_02_Dark_Blue_800x800.webm`,
                        blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/DivinationCircleIntro_02_Regular_Blue_800x800.webm`,
                    },
                    loop: {
                        dark_blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/DivinationCircleLoop_02_Dark_Blue_800x800.webm`,
                        blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/DivinationCircleLoop_02_Regular_Blue_800x800.webm`,
                    },
                    outro: {
                        dark_blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/DivinationCircleOutro_02_Dark_Blue_800x800.webm`,
                        blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/DivinationCircleOutro_02_Regular_Blue_800x800.webm`
                    }
                },
                enchantment: {
                    complete: {
                        _markers: {
                            loop: { start: 3000, end: 8000 },
                            forcedEnd: 8000
                        },
                        pink: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/EnchantmentCircleComplete_02_Regular_Pink_800x800.webm`,
                        dark_pink: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/EnchantmentCircleComplete_02_Dark_Pink_800x800.webm`,
                    },
                    intro: {
                        dark_pink: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/EnchantmentCircleIntro_02_Dark_Pink_800x800.webm`,
                        pink: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/EnchantmentCircleIntro_02_Regular_Pink_800x800.webm`,
                    },
                    loop: {
                        dark_pink: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/EnchantmentCircleLoop_02_Dark_Pink_800x800.webm`,
                        pink: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/EnchantmentCircleLoop_02_Regular_Pink_800x800.webm`,
                    },
                    outro: {
                        dark_pink: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/EnchantmentCircleOutro_02_Dark_Pink_800x800.webm`,
                        pink: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/EnchantmentCircleOutro_02_Regular_Pink_800x800.webm`
                    }
                },
                evocation: {
                    complete: {
                        _markers: {
                            loop: { start: 3000, end: 8000 },
                            forcedEnd: 8000
                        },
                        red: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/EvocationCircleComplete_02_Regular_Red_800x800.webm`,
                        dark_red: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/EvocationCircleComplete_02_Dark_Red_800x800.webm`,
                    },
                    intro: {
                        dark_red: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/EvocationCircleIntro_02_Dark_Red_800x800.webm`,
                        red: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/EvocationCircleIntro_02_Regular_Red_800x800.webm`,
                    },
                    loop: {
                        dark_red: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/EvocationCircleLoop_02_Dark_Red_800x800.webm`,
                        red: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/EvocationCircleLoop_02_Regular_Red_800x800.webm`,
                    },
                    outro: {
                        dark_red: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/EvocationCircleOutro_02_Dark_Red_800x800.webm`,
                        red: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/EvocationCircleOutro_02_Regular_Red_800x800.webm`
                    }
                },
                illusion: {
                    complete: {
                        _markers: {
                            loop: { start: 3000, end: 8000 },
                            forcedEnd: 8000
                        },
                        purple: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/IllusionCircleComplete_02_Regular_Purple_800x800.webm`,
                        dark_purple: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/IllusionCircleComplete_02_Dark_Purple_800x800.webm`,
                    },
                    intro: {
                        dark_purple: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/IllusionCircleIntro_02_Dark_Purple_800x800.webm`,
                        purple: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/IllusionCircleIntro_02_Regular_Purple_800x800.webm`,
                    },
                    loop: {
                        dark_purple: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/IllusionCircleLoop_02_Dark_Purple_800x800.webm`,
                        purple: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/IllusionCircleLoop_02_Regular_Purple_800x800.webm`,
                    },
                    outro: {
                        dark_purple: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/IllusionCircleOutro_02_Dark_Purple_800x800.webm`,
                        purple: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/IllusionCircleOutro_02_Regular_Purple_800x800.webm`
                    }
                },
                necromancy: {
                    complete: {
                        _markers: {
                            loop: { start: 3000, end: 8000 },
                            forcedEnd: 8000
                        },
                        green: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/NecromancyCircleComplete_02_Regular_Green_800x800.webm`,
                        dark_green: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/NecromancyCircleComplete_02_Dark_Green_800x800.webm`,
                    },
                    intro: {
                        dark_green: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/NecromancyCircleIntro_02_Dark_Green_800x800.webm`,
                        green: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/NecromancyCircleIntro_02_Regular_Green_800x800.webm`,
                    },
                    loop: {
                        dark_green: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/NecromancyCircleLoop_02_Dark_Green_800x800.webm`,
                        green: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/NecromancyCircleLoop_02_Regular_Green_800x800.webm`,
                    },
                    outro: {
                        dark_green: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/NecromancyCircleOutro_02_Dark_Green_800x800.webm`,
                        green: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/NecromancyCircleOutro_02_Regular_Green_800x800.webm`
                    }
                },
                transmutation: {
                    complete: {
                        _markers: {
                            loop: { start: 3000, end: 8000 },
                            forcedEnd: 8000
                        },
                        yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/TransmutationCircleComplete_02_Regular_Yellow_800x800.webm`,
                        dark_yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/TransmutationCircleComplete_02_Dark_Yellow_800x800.webm`,
                    },
                    intro: {
                        dark_yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/TransmutationCircleIntro_02_Dark_Yellow_800x800.webm`,
                        yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/TransmutationCircleIntro_02_Regular_Yellow_800x800.webm`,
                    },
                    loop: {
                        dark_yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/TransmutationCircleLoop_02_Dark_Yellow_800x800.webm`,
                        yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/TransmutationCircleLoop_02_Regular_Yellow_800x800.webm`,
                    },
                    outro: {
                        dark_yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/TransmutationCircleOutro_02_Dark_Yellow_800x800.webm`,
                        yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/TransmutationCircleOutro_02_Regular_Yellow_800x800.webm`
                    }
                }
            }
        },
        rune: {
            abjuration: {
                complete: {
                    _markers: {
                        loop: { start: 1500, end: 6500 }
                    },
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/AbjurationRuneComplete_01_Regular_Blue_400x400.webm`
                },
                intro: {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/AbjurationRuneIntro_01_Regular_Blue_400x400.webm`
                },
                loop: {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/AbjurationRuneLoop_01_Regular_Blue_400x400.webm`
                },
                outro: {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/AbjurationRuneOutro_01_Regular_Blue_400x400.webm`
                }
            },
            conjuration: {
                complete: {
                    _markers: {
                        loop: { start: 1500, end: 6500 }
                    },
                    yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/ConjurationRuneComplete_01_Regular_Yellow_400x400.webm`
                },
                intro: {
                    yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/ConjurationRuneIntro_01_Regular_Yellow_400x400.webm`
                },
                loop: {
                    yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/ConjurationRuneLoop_01_Regular_Yellow_400x400.webm`
                },
                outro: {
                    yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/ConjurationRuneOutro_01_Regular_Yellow_400x400.webm`
                }
            },
            divination: {
                complete: {
                    _markers: {
                        loop: { start: 1500, end: 6500 }
                    },
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/DivinationRuneComplete_01_Regular_Blue_400x400.webm`
                },
                intro: {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/DivinationRuneIntro_01_Regular_Blue_400x400.webm`
                },
                loop: {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/DivinationRuneLoop_01_Regular_Blue_400x400.webm`
                },
                outro: {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/DivinationRuneOutro_01_Regular_Blue_400x400.webm`
                }
            },
            enchantment: {
                complete: {
                    _markers: {
                        loop: { start: 1500, end: 6500 }
                    },
                    pink: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/EnchantmentRuneComplete_01_Regular_Pink_400x400.webm`
                },
                intro: {
                    pink: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/EnchantmentRuneIntro_01_Regular_Pink_400x400.webm`
                },
                loop: {
                    pink: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/EnchantmentRuneLoop_01_Regular_Pink_400x400.webm`
                },
                outro: {
                    pink: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/EnchantmentRuneOutro_01_Regular_Pink_400x400.webm`
                }
            },
            evocation: {
                complete: {
                    _markers: {
                        loop: { start: 1500, end: 6500 }
                    },
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/EvocationRuneComplete_01_Regular_Red_400x400.webm`
                },
                intro: {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/EvocationRuneIntro_01_Regular_Red_400x400.webm`
                },
                loop: {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/EvocationRuneLoop_01_Regular_Red_400x400.webm`
                },
                outro: {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/EvocationRuneOutro_01_Regular_Red_400x400.webm`
                }
            },
            illusion: {
                complete: {
                    _markers: {
                        loop: { start: 1500, end: 6500 }
                    },
                    purple: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/IllusionRuneComplete_01_Regular_Purple_400x400.webm`
                },
                intro: {
                    purple: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/IllusionRuneIntro_01_Regular_Purple_400x400.webm`
                },
                loop: {
                    purple: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/IllusionRuneLoop_01_Regular_Purple_400x400.webm`
                },
                outro: {
                    purple: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/IllusionRuneOutro_01_Regular_Purple_400x400.webm`
                }
            },
            necromancy: {
                complete: {
                    _markers: {
                        loop: { start: 1500, end: 6500 }
                    },
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/NecromancyRuneComplete_01_Regular_Green_400x400.webm`
                },
                intro: {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/NecromancyRuneIntro_01_Regular_Green_400x400.webm`
                },
                loop: {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/NecromancyRuneLoop_01_Regular_Green_400x400.webm`
                },
                outro: {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/NecromancyRuneOutro_01_Regular_Green_400x400.webm`
                }
            },
            transmutation: {
                complete: {
                    _markers: {
                        loop: { start: 1500, end: 6500 }
                    },
                    yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/TransmutationRuneComplete_01_Regular_Yellow_400x400.webm`
                },
                intro: {
                    yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/TransmutationRuneIntro_01_Regular_Yellow_400x400.webm`
                },
                loop: {
                    yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/TransmutationRuneLoop_01_Regular_Yellow_400x400.webm`
                },
                outro: {
                    yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/TransmutationRuneOutro_01_Regular_Yellow_400x400.webm`
                }
            }

        }
    }
    freeDatabase.markers = {
        '01': {
            blueyellow: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/Marker_01_Regular_BlueYellow_400x400.webm`
        },
        bubble: {
            '02': {
                complete: {
                    _markers: {
                        loop: { start: 1708, end: 3375 }
                    },
                    blue: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerBubbleComplete_02_01_Regular_Blue_400x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerBubbleComplete_02_02_Regular_Blue_400x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerBubbleComplete_02_03_Regular_Blue_400x400.webm`,
                    ],
                },
                loop: {
                    blue: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerBubbleLoop_02_01_Regular_Blue_400x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerBubbleLoop_02_02_Regular_Blue_400x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerBubbleLoop_02_03_Regular_Blue_400x400.webm`,
                    ],
                }
            },
            complete: {
                _markers: {
                    loop: { start: 2625, end: 7625 }
                },
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerBubbleComplete_01_Regular_Blue_400x400.webm`
            },
            intro: {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerBubbleIntro_01_Regular_Blue_400x400.webm`
            },
            loop: {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerBubble_01_Regular_Blue_400x400.webm`
            },
            outro: {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerBubbleOutro_01_Regular_Blue_400x400.webm`
            }
        },
        chain: {
            standard: {
                complete: {
                    _markers: {
                        loop: { start: 2033, end: 7000 },
                        forcedEnd: 7933
                    },
                    '02': {
                        red: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerChainStandard01_02_Regular_Red_Complete_400x400.webm`
                    }
                },
                loop: {
                    '01': {
                        red: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerChainStandard01_01_Regular_Red_Loop_400x400.webm`
                    },
                    '02': {
                        red: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerChainStandard01_02_Regular_Red_Loop_400x400.webm`
                    }
                }

            },
            spectral_standard: {
                complete: {
                    _markers: {
                        loop: { start: 2033, end: 7000 },
                        //forcedEnd: 7933
                    },
                    '02': {
                        blue: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerChainSpectralStandard01_02_Regular_Blue_Complete_400x400.webm`
                    }
                },
                loop: {
                    '02': {
                        blue: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerChainSpectralStandard01_02_Regular_Blue_Loop_400x400.webm`
                    }
                }
            },
        },
        circle_of_stars: {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerCircleOfStars_Regular_Blue_400x400.webm`
        },
        drop: {
            red: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerDrop_01_Regular_Red_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerDrop_02_Regular_Red_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerDrop_03_Regular_Red_400x400.webm`
            },
        },
        fear: {
            dark_purple: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerFear_01_Dark_Purple_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerFear_02_Dark_Purple_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerFear_03_Dark_Purple_400x400.webm`
            },
        },
        heart: {
            pink: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerHeart_01_Regular_Pink_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerHeart_02_Regular_Pink_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerHeart_03_Regular_Pink_400x400.webm`
            },
        },
        horror: {
            purple: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerHorror_01_Regular_Purple_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerHorror_02_Regular_Purple_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerHorror_03_Regular_Purple_400x400.webm`
            },
        },
        light: {
            complete: {
                _markers: {
                    loop: { start: 3750, end: 8750 }
                },
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerLightComplete_01_Regular_Blue_400x400.webm`
            },
            intro: {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerLightIntro_01_Regular_Blue_400x400.webm`
            },
            loop: {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerLight_01_Regular_Blue_400x400.webm`
            },
            nopulse: {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerLightNoPulse_01_Regular_Blue_400x400.webm`
            },
            outro: {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerLightOutro_01_Regular_Blue_400x400.webm`
            }
        },
        light_orb: {
            complete: {
                _markers: {
                    loop: { start: 3750, end: 8750 }
                },
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerLightOrbComplete_01_Regular_Blue_400x400.webm`
            },
            loop: {
                _markers: {
                    loop: { start: 3750, end: 8750 }
                },
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerLightOrbLoop_01_Regular_Blue_400x400.webm`
            }
        },
        music: {
            greenorange: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MusicMarker_01_Regular_GreenOrange_400x400.webm`
        },
        music_note: {
            blue: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerMusicNote_01_Regular_Blue_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerMusicNote_02_Regular_Blue_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerMusicNote_03_Regular_Blue_400x400.webm`
            }
        },
        mute: {
            dark_red: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerMute_01_Dark_Red_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerMute_02_Dark_Red_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerMute_03_Dark_Red_400x400.webm`
            }
        },
        on_token_mask: {
            complete: {
                _markers: {
                    loop: { start: 2000, end: 6967 }
                },
                '01': {
                    orange: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/OnTokenMask01_01_Regular_Orange_Complete_300x300.webm`
                }
            },
            loop: {
                '01': {
                    orange: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/OnTokenMask01_01_Regular_Orange_Loop_300x300.webm`
                }
            }
        },
        poison: {
            dark_green: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerPoison_01_Dark_Green_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerPoison_02_Dark_Green_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerPoison_03_Dark_Green_400x400.webm`
            }
        },
        runes: {
            dark_orange: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes_01_Dark_Orange_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes_02_Dark_Orange_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes_03_Dark_Orange_400x400.webm`
            },
            orange: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes_01_Regular_Orange_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes_02_Regular_Orange_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes_03_Regular_Orange_400x400.webm`
            }
        },
        runes02: {
            dark_orange: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes02_01_Dark_Orange_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes02_02_Dark_Orange_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes02_03_Dark_Orange_400x400.webm`
            },
            orange: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes02_01_Regular_Orange_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes02_02_Regular_Orange_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes02_03_Regular_Orange_400x400.webm`
            }
        },
        runes03: {
            dark_orange: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes03_01_Dark_Orange_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes03_02_Dark_Orange_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes03_03_Dark_Orange_400x400.webm`
            },
            orange: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes03_01_Regular_Orange_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes03_02_Regular_Orange_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes03_03_Regular_Orange_400x400.webm`
            }
        },
        shield: {
            green: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerShield_01_Regular_Green_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerShield_02_Regular_Green_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerShield_03_Regular_Green_400x400.webm`
            }
        },
        shield_cracked: {
            purple: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerShieldCracked_01_Regular_Purple_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerShieldCracked_02_Regular_Purple_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerShieldCracked_03_Regular_Purple_400x400.webm`
            }
        },
        shield_rampart: {
            complete: {
                _markers: {
                    loop: { start: 1916, end: 6208 }
                },
                '01': {
                    orange: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerShieldRampart01_01_Regular_Orange_400x400.webm`,
                }

            },
            loop: {
                '01': {
                    orange: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerShieldRampartLoop01_01_Regular_Orange_400x400.webm`,
                }
            }
        },
        simple: {
            "001": {
                complete: {
                    _markers: {
                        loop: { start: 1500, end: 3467 }
                    },
                    '001': {
                        blue: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/Simple/MarkerSimpleComplete001_001_Blue_600x600.webm`,
                        green: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/Simple/MarkerSimpleComplete001_001_Green_600x600.webm`,
                        purple: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/Simple/MarkerSimpleComplete001_001_Purple_600x600.webm`,
                        red: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/Simple/MarkerSimpleComplete001_001_Red_600x600.webm`,
                        yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/Simple/MarkerSimpleComplete001_001_Yellow_600x600.webm`
                    }

                },
                loop: {
                    '001': {
                        blue: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/Simple/MarkerSimpleLoop001_001_Blue_600x600.webm`,
                        green: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/Simple/MarkerSimpleLoop001_001_Green_600x600.webm`,
                        purple: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/Simple/MarkerSimpleLoop001_001_Purple_600x600.webm`,
                        red: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/Simple/MarkerSimpleLoop001_001_Red_600x600.webm`,
                        yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/Simple/MarkerSimpleLoop001_001_Yellow_600x600.webm`
                    }

                }
            }
        },
        skull: {
            dark_orange: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerSkull_01_Dark_Orange_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerSkull_02_Dark_Orange_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerSkull_03_Dark_Orange_400x400.webm`,
            },
            purple: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerSkull_01_Regular_Purple_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerSkull_02_Regular_Purple_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerSkull_03_Regular_Purple_400x400.webm`
            }
        },
        smoke: {
            ring: {
                loop: {
                    bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerSmokeRingLoop01_Regular_BluePurple_400x400.webm`
                }
            }
        },
        snowflake: {
            blue: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerSnowflake_01_Regular_Blue_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerSnowflake_02_Regular_Blue_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerSnowflake_03_Regular_Blue_400x400.webm`
            }
        },
        stun: {
            purple: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerStun_01_Regular_Purple_400x400.webm`,
                '02': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerStun_02_Regular_Purple_400x400.webm`,
                '03': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/MarkerStun_03_Regular_Purple_400x400.webm`
            }
        }
    }
    freeDatabase.maul = {
        _template: 'melee',
        melee: {
            standard: {
                white: `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Maul01_01_Regular_White_800x600.webm`
            }
        }
    }
    freeDatabase.misty_step = {
        '01': {
            blue: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Misty_Step/MistyStep_01_Regular_Blue_400x400.webm`
        },
        '02': {
            blue: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Misty_Step/MistyStep_02_Regular_Blue_400x400.webm`
        }
    }
    freeDatabase.melee_attack = {
        _template: "melee",
        '01': {
            butterflysword: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_ButterflySword01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_ButterflySword01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_ButterflySword01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_ButterflySword01_04_800x600.webm`,
                ]
            },
            chakram: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_Chakram01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_Chakram01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_Chakram01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_Chakram01_04_800x600.webm`,
                ]
            },
            magic_sword: {
                yellow: {
                    '01': [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_MagicSword01_01_Regular_Yellow_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_MagicSword01_02_Regular_Yellow_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_MagicSword01_03_Regular_Yellow_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_MagicSword01_04_Regular_Yellow_800x600.webm`,
                    ]
                }
            },
            shortsword:{
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_ShortSword01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_ShortSword01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_ShortSword01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_ShortSword01_04_800x600.webm`,
                ]
            },
            sickle:{
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_Sickle01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_Sickle01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_Sickle01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/MeleeAttack01_Sickle01_04_800x600.webm`,
                ]
            },
            trail: {
                '01': {
                    blueyellow: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/TrailAttack01_01_01_Regular_BlueYellow_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/TrailAttack01_01_02_Regular_BlueYellow_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/TrailAttack01_01_03_Regular_BlueYellow_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/TrailAttack01_01_04_Regular_BlueYellow_800x600.webm`,
                    ],
                    orangered: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/TrailAttack01_01_01_Regular_OrangeRed_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/TrailAttack01_01_02_Regular_OrangeRed_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/TrailAttack01_01_03_Regular_OrangeRed_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/TrailAttack01_01_04_Regular_OrangeRed_800x600.webm`,
                    ],
                    pinkpurple: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/TrailAttack01_01_01_Regular_PinkPurple_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/TrailAttack01_01_02_Regular_PinkPurple_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/TrailAttack01_01_03_Regular_PinkPurple_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group01/TrailAttack01_01_04_Regular_PinkPurple_800x600.webm`,
                    ]
                },
            }
        },
        '02': {
            trail: {
                '01': {
                    blueyellow: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/TrailAttack02_01_01_Regular_BlueYellow_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/TrailAttack02_01_02_Regular_BlueYellow_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/TrailAttack02_01_03_Regular_BlueYellow_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/TrailAttack02_01_04_Regular_BlueYellow_800x600.webm`,
                    ],
                    orangered: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/TrailAttack02_01_01_Regular_OrangeRed_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/TrailAttack02_01_02_Regular_OrangeRed_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/TrailAttack02_01_03_Regular_OrangeRed_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/TrailAttack02_01_04_Regular_OrangeRed_800x600.webm`,
                    ],
                    pinkpurple: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/TrailAttack02_01_01_Regular_PinkPurple_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/TrailAttack02_01_02_Regular_PinkPurple_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/TrailAttack02_01_03_Regular_PinkPurple_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/TrailAttack02_01_04_Regular_PinkPurple_800x600.webm`,
                    ]
                },
            },
            battleaxe: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_BattleAxe01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_BattleAxe01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_BattleAxe01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_BattleAxe01_04_800x600.webm`,
                ]
            },
            bone: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Bone01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Bone01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Bone01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Bone01_04_800x600.webm`,
                ]
            },
            club: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Club01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Club01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Club01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Club01_04_800x600.webm`,
                ]
            },
            hammer: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Hammer01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Hammer01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Hammer01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Hammer01_04_800x600.webm`,
                ],
                '02': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Hammer02_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Hammer02_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Hammer02_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Hammer02_04_800x600.webm`,
                ]
            },
            handaxe: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_HandAxe01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_HandAxe01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_HandAxe01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_HandAxe01_04_800x600.webm`,
                ]
            },
            mace: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Mace01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Mace01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Mace01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Mace01_04_800x600.webm`,
                ]
            },
            warhammer: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Warhammer01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Warhammer01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Warhammer01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Warhammer01_04_800x600.webm`,
                ]
            },
            wrench: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Wrench01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Wrench01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Wrench01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group02/MeleeAttack02_Wrench01_04_800x600.webm`,
                ]
            },
        },
        '03': {
            trail: {
                '01': {
                    blueyellow: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/TrailAttack03_01_01_Regular_BlueYellow_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/TrailAttack03_01_02_Regular_BlueYellow_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/TrailAttack03_01_03_Regular_BlueYellow_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/TrailAttack03_01_04_Regular_BlueYellow_800x600.webm`,
                    ],
                    orangered: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/TrailAttack03_01_01_Regular_OrangeRed_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/TrailAttack03_01_02_Regular_OrangeRed_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/TrailAttack03_01_03_Regular_OrangeRed_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/TrailAttack03_01_04_Regular_OrangeRed_800x600.webm`,
                    ],
                    pinkpurple: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/TrailAttack03_01_01_Regular_PinkPurple_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/TrailAttack03_01_02_Regular_PinkPurple_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/TrailAttack03_01_03_Regular_PinkPurple_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/TrailAttack03_01_04_Regular_PinkPurple_800x600.webm`,
                    ]
                },
            },
            greatbone: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_GreatBone01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_GreatBone01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_GreatBone01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_GreatBone01_04_800x600.webm`,
                ]
            },
            greataxe: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_GreatAxe01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_GreatAxe01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_GreatAxe01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_GreatAxe01_04_800x600.webm`,
                ]
            },
            greatclub: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_GreatClub01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_GreatClub01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_GreatClub01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_GreatClub01_04_800x600.webm`,
                ]
            },
            greatsword: {
                '01': [
                `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_GreatSword01_01_800x600.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_GreatSword01_02_800x600.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_GreatSword01_03_800x600.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_GreatSword01_04_800x600.webm`,
                ]
            },
            khybersword: {
                '01': [
                `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_KhyberSword01_01_800x600.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_KhyberSword01_02_800x600.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_KhyberSword01_03_800x600.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_KhyberSword01_04_800x600.webm`,
                ]
            },
            magical_greatsword: {
                '01': {
                    'orange': [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_MagicalGreatSword01_01_Regular_Orange_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_MagicalGreatSword01_02_Regular_Orange_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_MagicalGreatSword01_03_Regular_Orange_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_MagicalGreatSword01_04_Regular_Orange_800x600.webm`
                    ],
                }
            },
            'maul': {
                '01': [
                `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_Maul01_01_800x600.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_Maul01_02_800x600.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_Maul01_03_800x600.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group03/MeleeAttack03_Maul01_04_800x600.webm`,
                ]
            }
        },
        '04': {
            trail: {
                '01': {
                    blueyellow: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/TrailAttack04_01_01_Regular_BlueYellow_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/TrailAttack04_01_02_Regular_BlueYellow_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/TrailAttack04_01_03_Regular_BlueYellow_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/TrailAttack04_01_04_Regular_BlueYellow_800x600.webm`,
                    ],
                    orangered: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/TrailAttack04_01_01_Regular_OrangeRed_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/TrailAttack04_01_02_Regular_OrangeRed_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/TrailAttack04_01_03_Regular_OrangeRed_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/TrailAttack04_01_04_Regular_OrangeRed_800x600.webm`,
                    ],
                    pinkpurple: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/TrailAttack04_01_01_Regular_PinkPurple_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/TrailAttack04_01_02_Regular_PinkPurple_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/TrailAttack04_01_03_Regular_PinkPurple_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/TrailAttack04_01_04_Regular_PinkPurple_800x600.webm`,
                    ]
                },
            },
            falchion: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/MeleeAttack04_Falchion01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/MeleeAttack04_Falchion01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/MeleeAttack04_Falchion01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/MeleeAttack04_Falchion01_04_800x600.webm`,
                ]
            },
            katana: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/MeleeAttack04_Katana01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/MeleeAttack04_Katana01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/MeleeAttack04_Katana01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/MeleeAttack04_Katana01_04_800x600.webm`,
                ]
            },
            scimitar: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/MeleeAttack04_Scimitar01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/MeleeAttack04_Scimitar01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/MeleeAttack04_Scimitar01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group04/MeleeAttack04_Scimitar01_04_800x600.webm`,
                ]
            }
        },
        '05': {
            scythe: {
                '01': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group05/MeleeAttack05_Scythe01_01_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group05/MeleeAttack05_Scythe01_02_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group05/MeleeAttack05_Scythe01_03_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group05/MeleeAttack05_Scythe01_04_800x600.webm`,
                ]
            },
            trail: {
                '01': {
                    blueyellow: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group05/TrailAttack05_01_01_Regular_BlueYellow_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group05/TrailAttack05_01_02_Regular_BlueYellow_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group05/TrailAttack05_01_03_Regular_BlueYellow_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group05/TrailAttack05_01_04_Regular_BlueYellow_800x600.webm`,
                    ],
                    orangered: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group05/TrailAttack05_01_01_Regular_OrangeRed_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group05/TrailAttack05_01_02_Regular_OrangeRed_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group05/TrailAttack05_01_03_Regular_OrangeRed_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group05/TrailAttack05_01_04_Regular_OrangeRed_800x600.webm`,
                    ],
                    pinkpurple: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group05/TrailAttack05_01_01_Regular_PinkPurple_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group05/TrailAttack05_01_02_Regular_PinkPurple_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group05/TrailAttack05_01_03_Regular_PinkPurple_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group05/TrailAttack05_01_04_Regular_PinkPurple_800x600.webm`,
                    ]
                }
            }
        },
        '06': {
            shield: {
                '01': [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group06/MeleeAttack06_Shield01_01_Regular_White_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Group06/MeleeAttack06_Shield01_02_Regular_White_800x600.webm`
                    ]
            }
        }

    }
    freeDatabase.melee_generic = {
        _template: "melee",
        creature_attack: {
            claw: {
                "001": {
                    red: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Claw/CreatureAttackClaw_001_001_Red_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Claw/CreatureAttackClaw_001_002_Red_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Claw/CreatureAttackClaw_001_003_Red_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Claw/CreatureAttackClaw_001_004_Red_800x600.webm`
                    ]
                },
                "002": {
                    red: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Claw/CreatureAttackClaw_002_001_Red_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Claw/CreatureAttackClaw_002_002_Red_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Claw/CreatureAttackClaw_002_003_Red_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Claw/CreatureAttackClaw_002_004_Red_800x600.webm`
                    ]
                },
            },
            fist: {
                "001": {
                    red: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Fist/CreatureAttackFist_001_001_Red_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Fist/CreatureAttackFist_001_002_Red_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Fist/CreatureAttackFist_001_003_Red_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Fist/CreatureAttackFist_001_004_Red_800x600.webm`
                    ]

                },
                "002": {
                    blue: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Fist/CreatureAttackFist_002_001_Blue_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Fist/CreatureAttackFist_002_002_Blue_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Fist/CreatureAttackFist_002_003_Blue_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Fist/CreatureAttackFist_002_004_Blue_800x600.webm`
                    ]
                },
            },
            pincer: {
                "001": {
                    red: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Pincer/CreatureAttackPincer_001_001_Red_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Pincer/CreatureAttackPincer_001_002_Red_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Pincer/CreatureAttackPincer_001_003_Red_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Pincer/CreatureAttackPincer_001_004_Red_800x600.webm`
                    ]

                },
                "002": {
                    blue: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Pincer/CreatureAttackPincer_002_001_Blue_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Pincer/CreatureAttackPincer_002_002_Blue_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Pincer/CreatureAttackPincer_002_003_Blue_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Creature/Pincer/CreatureAttackPincer_002_004_Blue_800x600.webm`
                    ]
                },
            }
        },
        slash: {
            "01": {
                orange: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/GenericSlash01_01_Regular_Orange_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/GenericSlash01_02_Regular_Orange_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/GenericSlash01_03_Regular_Orange_800x600.webm`
                ]
            },
            "02": {
                "001": {
                    blue: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Slash02/GenericSlash02_001_001_Blue_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Slash02/GenericSlash02_001_002_Blue_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Slash02/GenericSlash02_001_003_Blue_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Slash02/GenericSlash02_001_004_Blue_800x600.webm`
                    ]
                },
                "002": {
                    blue: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Slash02/GenericSlash02_002_001_Blue_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Slash02/GenericSlash02_002_002_Blue_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Slash02/GenericSlash02_002_003_Blue_800x600.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Slash02/GenericSlash02_002_004_Blue_800x600.webm`
                    ]
                }
            }
        },
        whirlwind: {
            "01": {
                orange: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/GenericWhirlwind01_01_Regular_Orange_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/GenericWhirlwind01_02_Regular_Orange_800x600.webm`,
                ]
            }
        }
    }
    freeDatabase.moonbeam = {
        '01': {
            complete: {
                _markers: {
                    loop: { start: 3708, end: 8708 }
                },
                blue: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Moonbeam/MoonbeamComplete_01_Regular_Blue_400x400.webm`
            },
            loop: {
                blue: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Moonbeam/Moonbeam_01_Regular_Blue_400x400.webm`
            },
            no_pulse: {
                blue: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Moonbeam/MoonbeamNoPulse_01_Regular_Blue_400x400.webm`
            },
            intro: {
                blue: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Moonbeam/MoonbeamIntro_01_Regular_Blue_400x400.webm`
            },
            outro: {
                blue: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Moonbeam/MoonbeamOutro_01_Regular_Blue_400x400.webm`
            }
        }
}
    freeDatabase.music_notations = {
        bass_clef: {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Music_Notation/BassClef_01_Regular_Blue_200x200.webm`
        },
        beamed_quavers: {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Music_Notation/BeamedQuavers_01_Regular_Blue_200x200.webm`
        },
        crotchet: {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Music_Notation/Crotchet_01_Regular_Blue_200x200.webm`
        },
        flat: {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Music_Notation/Flat_01_Regular_Blue_200x200.webm`
        },
        quaver: {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Music_Notation/Quaver_01_Regular_Blue_200x200.webm`
        },
        sharp: {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Music_Notation/Sharp_01_Regular_Blue_200x200.webm`
        },
        treble_clef: {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Music_Notation/TrebleClef_01_Regular_Blue_200x200.webm`
        }
    }
    freeDatabase.muzzle_flash = {
        single: {
            "01": {
                yellow: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Muzzle_Flash/MuzzleFlashSingle01_01_Regular_Yellow_600x300.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Muzzle_Flash/MuzzleFlashSingle01_02_Regular_Yellow_600x300.webm`
                ]
            }
        }
    }
    freeDatabase.on_token_buff = {
            '001': {
                '001': {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/On_Token/Buff/Ontoken_Buff001_001_Blue_400x400.webm`,
                    bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/On_Token/Buff/Ontoken_Buff001_001_BluePurple_400x400.webm`,
                    blueteal: `${prefix}/JB2A_DnD5e/Library/Generic/On_Token/Buff/Ontoken_Buff001_001_BlueTeal_400x400.webm`,
                    greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/On_Token/Buff/Ontoken_Buff001_001_GreenPurple_400x400.webm`,
                    greenyellow: `${prefix}/JB2A_DnD5e/Library/Generic/On_Token/Buff/Ontoken_Buff001_001_GreenYellow_400x400.webm`,
                    orangeyellow: `${prefix}/JB2A_DnD5e/Library/Generic/On_Token/Buff/Ontoken_Buff001_001_OrangeYellow_400x400.webm`,
                    pinkyellow: `${prefix}/JB2A_DnD5e/Library/Generic/On_Token/Buff/Ontoken_Buff001_001_PinkYellow_400x400.webm`,
                    purplered: `${prefix}/JB2A_DnD5e/Library/Generic/On_Token/Buff/Ontoken_Buff001_001_PurpleRed_400x400.webm`,
                    white: `${prefix}/JB2A_DnD5e/Library/Generic/On_Token/Buff/Ontoken_Buff001_001_White_400x400.webm`
                }
            }            
    }
    freeDatabase.overcharged_sphere = {
        _template: 'ranged',
        '01': {
            '01': {
                dark_purple: {
                    '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/OverchargedSphere01_01_Dark_Purple_05ft_600x400.webm`,
                    '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/OverchargedSphere01_01_Dark_Purple_15ft_1000x400.webm`,
                    '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/OverchargedSphere01_01_Dark_Purple_30ft_1600x400.webm`,
                    '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/OverchargedSphere01_01_Dark_Purple_60ft_2800x400.webm`,
                    '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/OverchargedSphere01_01_Dark_Purple_90ft_4000x400.webm`
                }
            }
        }
    }
    freeDatabase.pack_hound_missile = {
        _template: 'ranged',
        blue: {
            '01': {
                '15ft':
                [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/PackhoundMissile01_01_Regular_Blue_15ft_1000x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/PackhoundMissile01_02_Regular_Blue_15ft_1000x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/PackhoundMissile01_03_Regular_Blue_15ft_1000x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/PackhoundMissile01_04_Regular_Blue_15ft_1000x400.webm`
                ],
                '30ft':
                [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/PackhoundMissile01_01_Regular_Blue_30ft_1600x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/PackhoundMissile01_02_Regular_Blue_30ft_1600x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/PackhoundMissile01_03_Regular_Blue_30ft_1600x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/PackhoundMissile01_04_Regular_Blue_30ft_1600x400.webm`
                ],
                '60ft':
                [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/PackhoundMissile01_01_Regular_Blue_60ft_2800x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/PackhoundMissile01_02_Regular_Blue_60ft_2800x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/PackhoundMissile01_03_Regular_Blue_60ft_2800x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/PackhoundMissile01_04_Regular_Blue_60ft_2800x400.webm`
                ],
                '90ft':
                [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/PackhoundMissile01_01_Regular_Blue_90ft_4000x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/PackhoundMissile01_02_Regular_Blue_90ft_4000x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/PackhoundMissile01_03_Regular_Blue_90ft_4000x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/PackhoundMissile01_04_Regular_Blue_90ft_4000x400.webm`
                ]
            } 
        },


    }
    freeDatabase.particles = {
        "002": {
            "001": {
                complete: {
                    _markers: {
                        loop: { start: 2000, end: 3967 }
                    },
                    few: {
                        blue: `${prefix}/JB2A_DnD5e/Library/Generic/Particles/Particles002/ParticlesComplete002_001_Few_Blue_600x600.webm`
                    },
                    many: {
                        blue: `${prefix}/JB2A_DnD5e/Library/Generic/Particles/Particles002/ParticlesComplete002_001_Many_Blue_600x600.webm`
                    }
                }
            }
        },
        outward: {
            greenyellow: {
                '01': {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesOutward01_01_Regular_GreenYellow_400x400.webm`,
                    '02': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesOutward01_02_Regular_GreenYellow_400x400.webm`,
                    '03': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesOutward01_03_Regular_GreenYellow_400x400.webm`,
                    '04': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesOutward01_04_Regular_GreenYellow_400x400.webm`,
                    '05': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesOutward01_05_Regular_GreenYellow_400x400.webm`
                },
                '02': {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesOutward02_01_Regular_GreenYellow_400x400.webm`,
                    '02': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesOutward02_02_Regular_GreenYellow_400x400.webm`,
                    '03': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesOutward02_03_Regular_GreenYellow_400x400.webm`,
                    '04': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesOutward02_04_Regular_GreenYellow_400x400.webm`,
                    '05': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesOutward02_05_Regular_GreenYellow_400x400.webm`
                }
            }
        },
        inward: {
            greenyellow: {
                '01': {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesInward01_01_Regular_GreenYellow_400x400.webm`,
                    '02': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesInward01_02_Regular_GreenYellow_400x400.webm`,
                    '03': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesInward01_03_Regular_GreenYellow_400x400.webm`,
                    '04': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesInward01_04_Regular_GreenYellow_400x400.webm`,
                    '05': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesInward01_05_Regular_GreenYellow_400x400.webm`
                },
                '02': {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesInward02_01_Regular_GreenYellow_400x400.webm`,
                    '02': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesInward02_02_Regular_GreenYellow_400x400.webm`,
                    '03': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesInward02_03_Regular_GreenYellow_400x400.webm`,
                    '04': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesInward02_04_Regular_GreenYellow_400x400.webm`,
                    '05': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesInward02_05_Regular_GreenYellow_400x400.webm`
                }
            }
        },
        swirl: {
            greenyellow: {
                '01': {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesSwirl01_01_Regular_GreenYellow_400x400.webm`,
                },
                '02': {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticlesSwirl02_01_Regular_GreenYellow_400x400.webm`,
                }
            }
        }
    }
    freeDatabase.particle_burst = {
        '01': {
            circle: {
                bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticleBurstCircle01_01_Regular_BluePurple_600x600.webm`
            },
            rune: {
                bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticleBurstRune01_01_Regular_BluePurple_600x600.webm`
            },
            star: {
                bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Particles/ParticleBurstStar01_01_Regular_BluePurple_600x600.webm`
            }
        },
}
    freeDatabase.plant_growth = {
        '03': {
            square: {
                "2x2": {
                    complete: {
                        _markers: {
                            loop: { start: 2000, end: 6000 }
                        },
                        greenyellow: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/PlantGrowthSquare03_01_Regular_GreenYellow_300x300.webm`
                    },

                    loop: {
                        greenyellow: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/PlantGrowthSquareLoop03_01_Regular_GreenYellow_300x300.webm`
                    }
                },
                "4x4": {
                    complete: {
                        _markers: {
                            loop: { start: 2000, end: 6000 }
                        },
                        greenyellow: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/PlantGrowthSquare03_01_Regular_GreenYellow_500x500.webm`
                    },

                    loop: {
                        greenyellow: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/PlantGrowthSquareLoop03_01_Regular_GreenYellow_500x500.webm`
                    }
                }

            },
            round: {
                "2x2": {
                    complete: {
                        _markers: {
                            loop: { start: 2000, end: 6000 }
                        },
                        greenyellow: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/PlantGrowthRound03_01_Regular_GreenYellow_300x300.webm`
                    },

                    loop: {
                        greenyellow: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/PlantGrowthRoundLoop03_01_Regular_GreenYellow_300x300.webm`
                    }
                },
                "4x4": {
                    complete: {
                        _markers: {
                            loop: { start: 2000, end: 6000 }
                        },
                        greenyellow: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/PlantGrowthRound03_01_Regular_GreenYellow_500x500.webm`
                    },

                    loop: {
                        greenyellow: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/PlantGrowthRoundLoop03_01_Regular_GreenYellow_500x500.webm`
                    }
                }
            },
            ring: {
                "4x4": {
                    complete: {
                        _markers: {
                            loop: { start: 2000, end: 6000 }
                        },
                        greenyellow: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/PlantGrowthRing03_01_Regular_GreenYellow_500x500.webm`
                    },
                    loop: {
                        greenyellow: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/PlantGrowthRingLoop03_01_Regular_GreenYellow_500x500.webm`
                    },
                    pulse: {
                        greenyellow: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/PlantGrowthRingPulse03_01_Regular_GreenYellow_500x500.webm`
                    }
                }
            }
        }


    }
    freeDatabase.portals = {
        horizontal: {
            ring: {
                bright_yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Portals/Portal_Bright_Yellow_H_400x400.webm`
            }
        },
        vertical: {
            ring: {
                bright_yellow: `${prefix}/JB2A_DnD5e/Library/Generic/Portals/Portal_Bright_Yellow_V_400x250.webm`
            }
        }
    }
    freeDatabase.quarterstaff = {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_01_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_02_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_03_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_04_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_05_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_06_Regular_White_800x600.webm`
                ]
            }
        }
    }
    freeDatabase.ranged = {
        _template: 'ranged',
        '01': {
            projectile: {
                '01': {
                    dark_orange: {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/01/RangedInstant01_01_Dark_Orange_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/01/RangedProjectile01_01_Dark_Orange_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/01/RangedProjectile01_01_Dark_Orange_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/01/RangedProjectile01_01_Dark_Orange_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/01/RangedProjectile01_01_Dark_Orange_90ft_4000x400.webm`
                    }
                }
            },
            instant: {
                '01': {
                    dark_orange: {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/01/RangedInstant01_01_Dark_Orange_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/01/RangedInstant01_01_Dark_Orange_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/01/RangedInstant01_01_Dark_Orange_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/01/RangedInstant01_01_Dark_Orange_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/01/RangedInstant01_01_Dark_Orange_90ft_4000x400.webm`
                    }
                }
            }
        },
        '02': {
            projectile: {
                '01': {
                    yellow: {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/02/RangedInstant02_01_Regular_Yellow_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/02/RangedProjectile02_01_Regular_Yellow_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/02/RangedProjectile02_01_Regular_Yellow_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/02/RangedProjectile02_01_Regular_Yellow_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/02/RangedProjectile02_01_Regular_Yellow_90ft_4000x400.webm`
                    }
                }
            },
            instant: {
                '01': {
                    yellow: {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/02/RangedInstant02_01_Regular_Yellow_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/02/RangedInstant02_01_Regular_Yellow_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/02/RangedInstant02_01_Regular_Yellow_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/02/RangedInstant02_01_Regular_Yellow_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/02/RangedInstant02_01_Regular_Yellow_90ft_4000x400.webm`
                    }
                }
            }
        },
        '03': {
            projectile: {
                '01': {
                    bluegreen: {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/03/RangedInstant03_01_Regular_BlueGreen_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/03/RangedProjectile03_01_Regular_BlueGreen_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/03/RangedProjectile03_01_Regular_BlueGreen_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/03/RangedProjectile03_01_Regular_BlueGreen_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/03/RangedProjectile03_01_Regular_BlueGreen_90ft_4000x400.webm`
                    }
                }
            },
            instant: {
                '01': {
                    bluegreen: {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/03/RangedInstant03_01_Regular_BlueGreen_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/03/RangedInstant03_01_Regular_BlueGreen_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/03/RangedInstant03_01_Regular_BlueGreen_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/03/RangedInstant03_01_Regular_BlueGreen_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/03/RangedInstant03_01_Regular_BlueGreen_90ft_4000x400.webm`
                    }
                }
            }
        },
        '04': {
            projectile: {
                '01': {
                    green: {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/04/RangedInstant04_01_Regular_Green_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/04/RangedProjectile04_01_Regular_Green_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/04/RangedProjectile04_01_Regular_Green_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/04/RangedProjectile04_01_Regular_Green_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/04/RangedProjectile04_01_Regular_Green_90ft_4000x400.webm`
                    }
                }
            },
            instant: {
                '01': {
                    green: {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/04/RangedInstant04_01_Regular_Green_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/04/RangedInstant04_01_Regular_Green_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/04/RangedInstant04_01_Regular_Green_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/04/RangedInstant04_01_Regular_Green_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/04/RangedInstant04_01_Regular_Green_90ft_4000x400.webm`
                    }
                }
            }
        },
        'card': {
            '01': {
                projectile: {
                    '01': {
                        blue: {
                            '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Card/ProjectileCard01_01_Regular_Blue_15ft_1000x400.webm`,
                            '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Card/ProjectileCard01_01_Regular_Blue_30ft_1600x400.webm`,
                            '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Card/ProjectileCard01_01_Regular_Blue_60ft_2800x400.webm`,
                            '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Card/ProjectileCard01_01_Regular_Blue_90ft_4000x400.webm`
                        }
                    }
                },
            }
        },
        'beam': {
            '001': {
                '01': {
                    orange: {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam001_01_Regular_Orange_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam001_01_Regular_Orange_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam001_01_Regular_Orange_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam001_01_Regular_Orange_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam001_01_Regular_Orange_90ft_4000x400.webm`
                    }
                },
                '02': {
                    orange: {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam001_02_Regular_Orange_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam001_02_Regular_Orange_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam001_02_Regular_Orange_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam001_02_Regular_Orange_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam001_02_Regular_Orange_90ft_4000x400.webm`
                    }
                },
                '03': {
                    orange: {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam001_03_Regular_Orange_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam001_03_Regular_Orange_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam001_03_Regular_Orange_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam001_03_Regular_Orange_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam001_03_Regular_Orange_90ft_4000x400.webm`
                    }
                }
            },
            '002': {
                '01': {
                    orange: {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam002_01_Regular_Orange_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam002_01_Regular_Orange_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam002_01_Regular_Orange_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam002_01_Regular_Orange_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam002_01_Regular_Orange_90ft_4000x400.webm`
                    }
                },
                '02': {
                    orange: {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam002_02_Regular_Orange_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam002_02_Regular_Orange_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam002_02_Regular_Orange_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam002_02_Regular_Orange_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam002_02_Regular_Orange_90ft_4000x400.webm`
                    }
                },
                '03': {
                    orange: {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam002_03_Regular_Orange_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam002_03_Regular_Orange_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam002_03_Regular_Orange_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam002_03_Regular_Orange_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Beam/Beam002_03_Regular_Orange_90ft_4000x400.webm`
                    }
                }
            }
        }
    }
    freeDatabase.ranged_helix = {
            _metadata: {
                name: "Ranged Helix",
                new: true
            },
    
            '001': {
                _template: 'ranged',
                blue: {
                    '05ft': [`${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Helix/001/RangedHelix001_01_Blue_05ft_600x400.webm`],
                    '15ft': [`${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Helix/001/RangedHelix001_01_Blue_15ft_1000x400.webm`],
                    '30ft': [`${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Helix/001/RangedHelix001_01_Blue_30ft_1600x400.webm`],
                    '60ft': [`${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Helix/001/RangedHelix001_01_Blue_60ft_2800x400.webm`],
                    '90ft': [`${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Helix/001/RangedHelix001_01_Blue_90ft_4000x400.webm`],
                }
            },
            'Helix_only': {
                _template: 'ranged',
                '001': {
                    blue: {
                        '05ft': [`${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Helix/001/HelixOnly/RangedHelixOnly001_01_Blue_05ft_600x400.webm`],
                        '15ft': [`${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Helix/001/HelixOnly/RangedHelixOnly001_01_Blue_15ft_1000x400.webm`],
                        '30ft': [`${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Helix/001/HelixOnly/RangedHelixOnly001_01_Blue_30ft_1600x400.webm`],
                        '60ft': [`${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Helix/001/HelixOnly/RangedHelixOnly001_01_Blue_60ft_2800x400.webm`],
                        '90ft': [`${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Helix/001/HelixOnly/RangedHelixOnly001_01_Blue_90ft_4000x400.webm`],
                    }
                }
            },
            'cast': {
                '001': {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Helix/001/Cast/RangedHelixCast001_01_Blue_600x600.webm`
                }
            },
            'hit': {
                '001': {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Helix/001/Hit/RangedHelixHit001_01_Blue_600x600.webm`
                }
            }
    }
    freeDatabase.ranged_missile = {

        '001': {
            _template: 'ranged',
            blue: {
                '05ft': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_01_Blue_05ft_600x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_02_Blue_05ft_600x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_03_Blue_05ft_600x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_04_Blue_05ft_600x400.webm`
                ],
                '15ft': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_01_Blue_15ft_1000x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_02_Blue_15ft_1000x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_03_Blue_15ft_1000x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_04_Blue_15ft_1000x400.webm`
                ],
                '30ft': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_01_Blue_30ft_1600x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_02_Blue_30ft_1600x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_03_Blue_30ft_1600x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_04_Blue_30ft_1600x400.webm`
                ],
                '60ft': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_01_Blue_60ft_2800x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_02_Blue_60ft_2800x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_03_Blue_60ft_2800x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_04_Blue_60ft_2800x400.webm`
                ],
                '90ft': [
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_01_Blue_90ft_4000x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_02_Blue_90ft_4000x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_03_Blue_90ft_4000x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/RangedMissile001_04_Blue_90ft_4000x400.webm`
                ],
            }
        },
        'missile_only': {
            _template: 'ranged',
            '001': {
                blue: {
                    '05ft': [
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_01_Blue_05ft_600x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_02_Blue_05ft_600x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_03_Blue_05ft_600x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_04_Blue_05ft_600x400.webm`
                    ],
                    '15ft': [
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_01_Blue_15ft_1000x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_02_Blue_15ft_1000x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_03_Blue_15ft_1000x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_04_Blue_15ft_1000x400.webm`
                    ],
                    '30ft': [
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_01_Blue_30ft_1600x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_02_Blue_30ft_1600x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_03_Blue_30ft_1600x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_04_Blue_30ft_1600x400.webm`
                    ],
                    '60ft': [
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_01_Blue_60ft_2800x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_02_Blue_60ft_2800x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_03_Blue_60ft_2800x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_04_Blue_60ft_2800x400.webm`
                    ],
                    '90ft': [
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_01_Blue_90ft_4000x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_02_Blue_90ft_4000x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_03_Blue_90ft_4000x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/MissileOnly/RangedMissileOnly001_04_Blue_90ft_4000x400.webm`
                    ],
                }
            }

        },
        'cast': {
            '001': {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/Cast/RangedMissileCast001_01_Blue_600x600.webm`
            }
        },
        'hit': {
            '001': {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/Missile/001/Hit/RangedMissileHit001_01_Blue_600x600.webm`
            }
        }
    }
    freeDatabase.rapier = {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Rapier01_01_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Rapier01_02_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Rapier01_03_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Rapier01_04_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Rapier01_05_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Rapier01_06_Regular_White_800x600.webm`
                ]
            }
        }
    }
    freeDatabase.ray_of_frost = {
        _template: 'ranged',
        blue: {
            '05ft': `${prefix}/JB2A_DnD5e/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Blue_05ft_600x400.webm`,
            '15ft': `${prefix}/JB2A_DnD5e/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Blue_15ft_1000x400.webm`,
            '30ft': `${prefix}/JB2A_DnD5e/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Blue_30ft_1600x400.webm`,
            '60ft': `${prefix}/JB2A_DnD5e/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Blue_60ft_2800x400.webm`,
            '90ft': `${prefix}/JB2A_DnD5e/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Blue_90ft_4000x400.webm`
        }
    }
    freeDatabase.rolling_boulder = {
        loop: {
            '01': {
                rock: {
                    brown: `${prefix}/JB2A_DnD5e/Library/Generic/Traps/RollingBoulderRockLoop01_01_Regular_Brown_600x600.webm`
                }
            }
        }
    }
    freeDatabase.sacred_flame = {
        _template: '',
        source: {
            yellow: `${prefix}/JB2A_DnD5e/Library/Cantrip/Sacred_Flame/SacredFlameSource_01_Regular_Yellow_400x400.webm`
        },
        target: {
            yellow: `${prefix}/JB2A_DnD5e/Library/Cantrip/Sacred_Flame/SacredFlameTarget_01_Regular_Yellow_400x400.webm`
        }
    }
    freeDatabase.scimitar = {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Scimitar01_01_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Scimitar01_02_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Scimitar01_03_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Scimitar01_04_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Scimitar01_05_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Scimitar01_06_Regular_White_800x600.webm`
                ]
            }
        }
    }
    freeDatabase.scorched_earth = {
        black: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/ScorchedEarth_01_Black_800x800.webm`,
        "02": {
            black: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/ScorchedEarth_02_Black_800x800.webm`
        }
    }
    freeDatabase.scorching_ray = {
        _template: 'ranged',
        '01': {
            orange: {
                '05ft': `${prefix}/JB2A_DnD5e/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_05ft_600x400.webm`,
                '15ft': `${prefix}/JB2A_DnD5e/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_15ft_1000x400.webm`,
                '30ft': `${prefix}/JB2A_DnD5e/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_30ft_1600x400.webm`,
                '60ft': `${prefix}/JB2A_DnD5e/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_60ft_2800x400.webm`,
                '90ft': `${prefix}/JB2A_DnD5e/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_90ft_4000x400.webm`
            }
        }
    }
    freeDatabase.screen_overlay = {
        '01': {
            bad_omen: `${prefix}/JB2A_DnD5e/Library/Generic/Screen_Overlay/BadOmen01_01_Dark_Black_1920x1080.webm`
        }
    }
    freeDatabase.shatter = {
        blue: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Shatter/Shatter_01_Blue_400x400.webm`
    }
    freeDatabase.shield = {
        '01': {
            complete: {
                _markers: {
                    loop: { start: 1533, end: 5533 },
                    forcedEnd: 5533
                },
                '01': {
                    blue: `${prefix}/JB2A_DnD5e/Library/1st_Level/Shield/Shield_01_Regular_Blue_Complete_400x400.webm`
                }
            },
            intro: {
                blue: `${prefix}/JB2A_DnD5e/Library/1st_Level/Shield/Shield_01_Regular_Blue_Intro_400x400.webm`
            },
            loop: {
                blue: `${prefix}/JB2A_DnD5e/Library/1st_Level/Shield/Shield_01_Regular_Blue_Loop_400x400.webm`
            },
            outro_explode: {
                blue: `${prefix}/JB2A_DnD5e/Library/1st_Level/Shield/Shield_01_Regular_Blue_OutroExplode_400x400.webm`
            },
            outro_fade: {
                blue: `${prefix}/JB2A_DnD5e/Library/1st_Level/Shield/Shield_01_Regular_Blue_OutroFade_400x400.webm`
            }
        }
    }
    freeDatabase.shield_themed = {
        above: {
            eldritch_web: {
                '01': {
                    dark_purple: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/ShieldEldritchWebAbove01_01_Dark_Purple_400x400.webm`
                }
            },
            fire: {
                '01': {
                    orange: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/ShieldFireAbove01_01_Regular_Orange_400x400.webm`
                }
            },
            ice: {
                '01': {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Ice/ShieldIceAbove01_01_Regular_Blue_400x400.webm`
                }
            },
            molten_earth: {
                '01': {
                    orange: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/ShieldMoltenEarthAbove01_01_Regular_Orange_400x400.webm`
                }
            }
        },
        below: {
            eldritch_web: {
                '01': {
                    dark_purple: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/ShieldEldritchWebBelow01_01_Dark_Purple_400x400.webm`
                }
            },
            fire: {
                '01': {
                    orange: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/ShieldFireBelow01_01_Regular_Orange_400x400.webm`
                }
            },
            ice: {
                '01': {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Ice/ShieldIceBelow01_01_Regular_Blue_400x400.webm`
                }
            },
            molten_earth: {
                '01': {
                    orange: `${prefix}/JB2A_DnD5e/Library/Generic/Fire/ShieldMoltenEarthBelow01_01_Regular_Orange_400x400.webm`
                }
            }
        }
    }
    freeDatabase.shield_attack = {
        ranged: {
            _template: 'ranged',
            throw: {
                '01': {
                    white: {
                        '01': {
                            '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Shield01_01_Regular_White_15ft_1000x400.webm`,
                            '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Shield01_01_Regular_White_30ft_1600x400.webm`,
                            '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Shield01_01_Regular_White_60ft_2800x400.webm`,
                            '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Shield01_01_Regular_White_90ft_4000x400.webm`
                        },
                        '02': {
                            '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Shield01_02_Regular_White_15ft_1000x400.webm`,
                            '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Shield01_02_Regular_White_30ft_1600x400.webm`,
                            '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Shield01_02_Regular_White_60ft_2800x400.webm`,
                            '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Shield01_02_Regular_White_90ft_4000x400.webm`
                        }
                    }
                }
            },
            return: {
                '01': {
                    white: {
                        '01': {
                            '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Shield01_01_Regular_White_Return_15ft_1000x400.webm`,
                            '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Shield01_01_Regular_White_Return_30ft_1600x400.webm`,
                            '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Shield01_01_Regular_White_Return_60ft_2800x400.webm`,
                            '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Shield01_01_Regular_White_Return_90ft_4000x400.webm`
                        }
                    }
                }
            }
            

        }
    }
    freeDatabase.shimmer = {
        '01': {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/Shimmer01_01_Regular_Blue_400x400.webm`
        }
    }
    freeDatabase.shortsword = {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Shortsword01_01_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Shortsword01_02_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Shortsword01_03_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Shortsword01_04_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Shortsword01_05_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Shortsword01_06_Regular_White_800x600.webm`
                ]
            }
        }
    }
    freeDatabase.side_impact = {
        _template: 'side_impact',
        ice_shard: {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/SideImpactIceShard01_01_Regular_Blue_600x600.webm`
        },
        part: {
            fast: {
                ice_shard: {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/PartSideImpactFastIceShard01_01_Regular_Blue_600x600.webm`,
                }
            },
            slow: {
                snowflake: {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/PartSideImpactSlowSnowflake01_01_Regular_Blue_600x600.webm`,
                }
            },
            smoke: {
                blue: {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/Impact/PartSideImpactSmoke01_01_Regular_Blue_600x600.webm`,
                    '02': `${prefix}/JB2A_DnD5e/Library/Generic/Impact/PartSideImpactSmoke02_01_Regular_Blue_600x600.webm`,
                    '03': `${prefix}/JB2A_DnD5e/Library/Generic/Impact/PartSideImpactSmoke03_01_Regular_Blue_600x600.webm`
                }
            },
            shockwave: {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Impact/PartSideImpactShockwave01_01_Regular_Blue_600x600.webm`,
            }
        }
    }
    freeDatabase.sleep = {
        target: {
            pink: `${prefix}/JB2A_DnD5e/Library/1st_Level/Sleep/SleepMarker01_01_Regular_Pink_400x400.webm`
        },
        symbol: {
            dark_pink: `${prefix}/JB2A_DnD5e/Library/1st_Level/Sleep/SleepSymbol01_01_Dark_Pink_400x400.webm`,
            pink: `${prefix}/JB2A_DnD5e/Library/1st_Level/Sleep/SleepSymbol01_01_Regular_Pink_400x400.webm`
        },
        cloud: {
            '01': {
                pink: `${prefix}/JB2A_DnD5e/Library/1st_Level/Sleep/Cloud01_01_Regular_Pink_400x400.webm`
            },
            '02': {
                pink: `${prefix}/JB2A_DnD5e/Library/1st_Level/Sleep/Cloud01_02_Regular_Pink_400x400.webm`
            }
        }
    }
    freeDatabase.sleet_storm = {
        '01': {
            blue: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Sleet_Storm/SleetStorm_01_Blue_800x800.webm`
        },
        '02': {
            blue: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Sleet_Storm/SleetStorm_02_Blue_800x800.webm`
        },
        blue: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Sleet_Storm/SleetStorm_01_Blue_800x800.webm`
    }
    freeDatabase.smoke = {
        puff: {
            side: {
                grey: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePuffSide01_01_Regular_Grey_400x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePuffSide01_02_Regular_Grey_400x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePuffSide01_03_Regular_Grey_400x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePuffSide01_04_Regular_Grey_400x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePuffSide01_05_Regular_Grey_400x400.webm`,
                ],
                '02': {
                    white: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePuffSide02_01_Regular_White_400x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePuffSide02_02_Regular_White_400x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePuffSide02_03_Regular_White_400x400.webm`
                    ]
                }
            },
            centered: {
                grey: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePuff01_01_Regular_Grey_400x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePuff01_02_Regular_Grey_400x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePuff01_03_Regular_Grey_400x400.webm`,
                ]
            },
            ring: {
                '01': {
                    white: [
                        `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePuffRing01_01_Regular_White_400x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePuffRing01_02_Regular_White_400x400.webm`,
                        `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePuffRing01_03_Regular_White_400x400.webm`,
                    ]
                }
            }
        },
        plumes: {
            _markers: {
                loop: { start: 2000, end: 4000 }
                },
            "01": {
                grey: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePlumes01_01_Regular_Grey_400x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePlumes01_02_Regular_Grey_400x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePlumes01_03_Regular_Grey_400x400.webm`,
                ]
            }
        },
        plumes_loop: {
            "01": {
                grey: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePlumesLoop01_01_Regular_Grey_400x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePlumesLoop01_02_Regular_Grey_400x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokePlumesLoop01_03_Regular_Grey_400x400.webm`,
                ]
            }
        }
    }
    freeDatabase.smoke_line = {
        '05x05ft': {
            lightblue: `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokeLine_01_Regular_LightBlue_05x05ft_400x400.webm`
        },
        '10x05ft': {
            lightblue: `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokeLine_01_Regular_LightBlue_10x05ft_800x400.webm`
        },
        '15x05ft': {
            lightblue: `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokeLine_01_Regular_LightBlue_15x05ft_1000x400.webm`
        },
        '25x05ft': {
            lightblue: `${prefix}/JB2A_DnD5e/Library/Generic/Smoke/SmokeLine_01_Regular_LightBlue_25x05ft_1400x400.webm`
        },
    },
        freeDatabase.sneak_attack = {
            dark_green: `${prefix}/JB2A_DnD5e/Library/1st_Level/Sneak_Attack/Sneak_Attack_Dark_Green_300x300.webm`
        }
    freeDatabase.sneak_attack_text = {
        '01': {
            dark_red: `${prefix}/JB2A_DnD5e/Library/Generic/UI/SneakAttackText_01_Dark_Red_400x400.webm`
        },
        '02': {
            dark_red: `${prefix}/JB2A_DnD5e/Library/Generic/UI/SneakAttackText_02_Dark_Red_400x400.webm`
        }
    }
    freeDatabase.snowball_toss = {
        _template: 'ranged',
        white: {
            '01': {
                '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_05ft_600x500.webm`,
                '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_15ft_1000x500.webm`,
                '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_30ft_1600x500.webm`,
                '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_60ft_2800x500.webm`,
                '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_90ft_4000x500.webm`,
            }
        }
    }
    freeDatabase.soundwave = {
        '01': {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/Soundwave01_01_Regular_Blue_600x600.webm`
        },
        '02': {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/Soundwave01_02_Regular_Blue_600x600.webm`
        },
    }
    freeDatabase.spear = {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Spear01_01_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Spear01_02_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Spear01_03_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Spear01_04_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Spear01_05_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Spear01_06_Regular_White_800x600.webm`
                ]
            }
        }
    }
    freeDatabase.spell_projectile = {
        _template: 'ranged',
        ice_shard: {
            blue: {
                '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/ProjectileIceShard01_01_Regular_Blue_05ft_600x400.webm`,
                '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/ProjectileIceShard01_01_Regular_Blue_15ft_1000x400.webm`,
                '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/ProjectileIceShard01_01_Regular_Blue_30ft_1600x400.webm`,
                '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/ProjectileIceShard01_01_Regular_Blue_60ft_2800x400.webm`,
                '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/RangedSpell/ProjectileIceShard01_01_Regular_Blue_90ft_4000x400.webm`
            }
        }
    }
    freeDatabase.sphere_of_annihilation = {
        '200px': {
            purple: `${prefix}/JB2A_DnD5e/Library/Generic/Item/SphereOfAnnihilation_01_Regular_Purple_200x200.webm`
        },
        '600px': {
            purple: `${prefix}/JB2A_DnD5e/Library/Generic/Item/SphereOfAnnihilation_01_Regular_Purple_600x600.webm`
        }
    }
    freeDatabase.spike_trap = {
        '05x05ft': {
            top: {
                holes: {
                    normal: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapTopHoles01_01_Regular_Grey_05x05ft_400x400.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapTopHoles01_02_Regular_Grey_05x05ft_400x400.webm`
                        }
                    },
                    rearming: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapTopHolesRearm01_01_Regular_Grey_05x05ft_400x400.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapTopHolesRearm01_02_Regular_Grey_05x05ft_400x400.webm`
                        }
                    },
                    still_frame: {
                        deployed: `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/Stills/SpikeTrapTopHolesDeployed01_Regular_Grey_05x05ft_400x400_StillFrame.webp`,
                        hidden: `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/Stills/SpikeTrapTopHolesHidden01_Dark_Black_05x05ft_400x400_StillFrame.webp`
                    }
                }
            },
            side: {
                holes: {
                    normal: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapSideHoles01_01_Regular_Grey_05x05ft_400x300.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapSideHoles01_02_Regular_Grey_05x05ft_400x300.webm`
                        }
                    },
                    rearming: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapSideHolesRearm01_01_Regular_Grey_05x05ft_400x300.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapSideHolesRearm01_02_Regular_Grey_05x05ft_400x300.webm`
                        }
                    },
                    still_frame: {
                        deployed: `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/Stills/SpikeTrapSideHolesDeployed01_Regular_Grey_05x05ft_400x300_StillFrame.webp`,
                        hidden: `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/Stills/SpikeTrapSideHolesHidden01_Dark_Black_05x05ft_400x300_StillFrame.webp`
                    }
                }
            }
        },
        '10x05ft': {
            top: {
                holes: {
                    normal: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapTopHoles01_01_Regular_Grey_10x05ft_600x400.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapTopHoles01_02_Regular_Grey_10x05ft_600x400.webm`
                        }
                    },
                    rearming: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapTopHolesRearm01_01_Regular_Grey_10x05ft_600x400.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapTopHolesRearm01_02_Regular_Grey_10x05ft_600x400.webm`
                        }
                    },
                    still_frame: {
                        deployed: `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/Stills/SpikeTrapTopHolesDeployed01_Regular_Grey_10x05ft_600x400_StillFrame.webp`,
                        hidden: `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/Stills/SpikeTrapTopHolesHidden01_Dark_Black_10x05ft_600x400_StillFrame.webp`
                    }
                }
            },
            side: {
                holes: {
                    normal: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapSideHoles01_01_Regular_Grey_10x05ft_600x300.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapSideHoles01_02_Regular_Grey_10x05ft_600x300.webm`
                        },
                    },
                    rearming: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapSideHolesRearm01_01_Regular_Grey_10x05ft_600x300.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapSideHolesRearm01_02_Regular_Grey_10x05ft_600x300.webm`
                        },
                    },
                    still_frame: {
                        deployed: `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/Stills/SpikeTrapSideHolesDeployed01_Regular_Grey_10x05ft_600x300_StillFrame.webp`,
                        hidden: `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/Stills/SpikeTrapSideHolesHidden01_Dark_Black_10x05ft_600x300_StillFrame.webp`
                    }
                }
            }
        },
        '10x10ft': {
            top: {
                holes: {
                    normal: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapTopHoles01_01_Regular_Grey_10x10ft_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapTopHoles01_02_Regular_Grey_10x10ft_600x600.webm`
                        }
                    },
                    rearming: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapTopHolesRearm01_01_Regular_Grey_10x10ft_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapTopHolesRearm01_02_Regular_Grey_10x10ft_600x600.webm`
                        }
                    },
                    still_frame: {
                        deployed: `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/Stills/SpikeTrapTopHolesDeployed01_Regular_Grey_10x10ft_600x600_StillFrame.webp`,
                        hidden: `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/Stills/SpikeTrapTopHolesHidden01_Dark_Black_10x10ft_600x600_StillFrame.webp`
                    }
                }
            },
            side: {
                holes: {
                    normal: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapSideHoles01_01_Regular_Grey_10x10ft_600x300.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapSideHoles01_02_Regular_Grey_10x10ft_600x300.webm`
                        }
                    },
                    rearming: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapSideHolesRearm01_01_Regular_Grey_10x10ft_600x300.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/SpikeTrapSideHolesRearm01_02_Regular_Grey_10x10ft_600x300.webm`
                        }
                    },
                    still_frame: {
                        deployed: `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/Stills/SpikeTrapSideHolesDeployed01_Regular_Grey_10x10ft_600x300_StillFrame.webp`,
                        hidden: `${prefix}/JB2A_DnD5e/Library/Generic/Traps/Spike_Trap/Stills/SpikeTrapSideHolesHidden01_Dark_Black_10x10ft_600x300_StillFrame.webp`
                    }
                }
            }
        }
    }
    freeDatabase.spirit_guardians = {
        blueyellow: {
            ring: `${prefix}/JB2A_DnD5e/Library/3rd_Level/Spirit_Guardians/SpiritGuardians_01_Light_BlueYellow_600x600.webm`
        }
    }
    freeDatabase.spiritual_weapon = {
        club: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Club01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        dagger: {
            '02': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Dagger02_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        falchion: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Falchion01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        glaive: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Glaive01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        greataxe: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_GreatAxe01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        greatclub: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_GreatClub01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        greatsword: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_GreatSword01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        halberd: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Halberd01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        hammer: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Hammer01_02_Spectral_Green_400x400.webm`
                    }
                }
            },
            '02': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Hammer02_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        handaxe: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_HandAxe01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        javelin: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Javelin01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        katana: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Katana01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        longsword: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_LongSword01_02_Spectral_Green_400x400.webm`
                    }
                }

            }
        },
        mace: {
            //TO BE REMOVED [-->
            flaming: {
                yellow: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Mace01_01_Flaming_Yellow_200x200.webm`
            },
            spectral: {
                blue: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Mace01_01_Spectral_Blue_200x200.webm`
            },
            //TO BE REMOVED <--]
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Mace01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        maul: {
            //TO BE REMOVED [-->
            flaming: {
                yellow: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Maul01_01_Flaming_Yellow_200x200.webm`
            },
            spectral: {
                blue: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Maul01_01_Spectral_Blue_200x200.webm`
            },
            //TO BE REMOVED <--]
            '01': {
                spectral: {
                    '02': {

                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Maul01_02_Spectral_Green_400x400.webm`
                    }
                }
            },
        },
        quarterstaff: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Quarterstaff01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        rapier: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Rapier01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        scimitar: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Scimitar01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        scythe: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Scythe01_02_Spectral_Green_400x400.webm`
                    }
                }
            },
        },
        shortsword: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Shortsword01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        spear: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Spear01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        trident: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Trident01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        warhammer: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Warhammer01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
        wrench: {
            '01': {
                spectral: {
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Wrench01_02_Spectral_Green_400x400.webm`
                    }
                }
            }
        },
    }
    freeDatabase.static_electricity = {
        '01': {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Lightning/StaticElectricity_01_Regular_Blue_400x400.webm`
        },
        '02': {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Lightning/StaticElectricity_02_Regular_Blue_400x400.webm`
        },
        '03': {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Lightning/StaticElectricity_03_Regular_Blue_400x400.webm`
        }
    }
    freeDatabase.swirling_feathers = {
        outburst: {
            '01': {
                textured: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Nature/SwirlingFeathersOutburst01_01_Regular_Textured_400x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Nature/SwirlingFeathersOutburst02_01_Regular_Textured_400x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Nature/SwirlingFeathersOutburst03_01_Regular_Textured_400x400.webm`
                ]
            }
        }
}
    freeDatabase.swirling_leaves = {
        complete: {
            '01': {
                green: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Nature/SwirlingLeavesComplete01_01_Regular_Green_400x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Nature/SwirlingLeavesComplete01_02_Regular_Green_400x400.webm`
                ],
            },
            '02': {
                green: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/SwirlingLeavesComplete02_01_Regular_Green_400x400.webm`,
            }
        },
        loop: {
            '01': {
                green: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Nature/SwirlingLeavesLoop01_01_Regular_Green_400x400.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Nature/SwirlingLeavesLoop01_02_Regular_Green_400x400.webm`
                ],
            },
            '02': {
                green: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/SwirlingLeavesLoop02_01_Regular_Green_400x400.webm`,
            }
        },
        ranged: {
            _template: 'ranged',
            greenorange: {
                '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Nature/SwirlingLeaves01_01_Regular_GreenOrange_05ft_600x400.webm`,
                '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Nature/SwirlingLeaves01_01_Regular_GreenOrange_15ft_1000x400.webm`,
                '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Nature/SwirlingLeaves01_01_Regular_GreenOrange_30ft_1600x400.webm`,
                '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Nature/SwirlingLeaves01_01_Regular_GreenOrange_60ft_2800x400.webm`,
                '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Nature/SwirlingLeaves01_01_Regular_GreenOrange_90ft_4000x400.webm`
            }
        },
        outburst: {
            '01': {
                pink: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/SwirlingLeavesOutburst_01_01_Regular_Pink_400x400.webm`
            }
        },
    },
        freeDatabase.swirling_sparkles = {
            '01': {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/SwirlingSparkles_01_Regular_Blue_400x400.webm`
            }
        }
    freeDatabase.sword = {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Sword01_01_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Sword01_02_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Sword01_03_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Sword01_04_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Sword01_05_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Sword01_06_Regular_White_800x600.webm`
                ]
            }
        }
    }
    freeDatabase.teleport = {
        "01": {
            blue: `${prefix}/JB2A_DnD5e/Library/Generic/Energy/Teleport/Teleport01_01_Regular_Blue_500x300.webm`
        }
    }
    freeDatabase.template_circle = {
        aura: {
            "01": {
                complete: {
                    _markers: {
                        loop: { start: 2033, end: 5667 }
                    },
                    small: {
                        bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraComplete01_01_Regular_BluePurple_500x500.webm`
                    },
                    large: {
                        bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraComplete01_01_Regular_BluePurple_900x900.webm`
                    }
                },
                loop: {
                    small: {
                        bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraLoop01_01_Regular_BluePurple_500x500.webm`
                    },
                    large: {
                        bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraLoop01_01_Regular_BluePurple_900x900.webm`
                    }
                }
            },
            "02": {
                complete: {
                    _markers: {
                        loop: { start: 2033, end: 5366 }
                    },
                    small: {
                        bluepink: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraComplete02_01_Regular_BluePink_500x500.webm`
                    },
                    large: {
                        bluepink: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraComplete02_01_Regular_BluePink_900x900.webm`
                    }
                },
                loop: {
                    small: {
                        bluepink: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraLoop02_01_Regular_BluePink_500x500.webm`
                    },
                    large: {
                        bluepink: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/AuraLoop02_01_Regular_BluePink_900x900.webm`
                    }
                }
            },
            "03": {
                inward: {
                        "001": {
                            complete: {
                                _markers: {
                                    loop: { start: 3000, end: 5967 }
                                },
                                combined: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Inward_Complete_001_Blue_1400x1400.webm`
                                },
                                part01: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Inward_Complete_001_Blue_1400x1400.webm`
                                },
                                part02: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Inward_Complete_001_Blue_1000x1000.webm`
                                }
                            },
                            loop: {
                                combined: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Inward_Loop_001_Blue_1400x1400.webm`
                                },
                                part01: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Inward_Loop_001_Blue_1400x1400.webm`
                                },
                                part02: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Inward_Loop_001_Blue_1000x1000.webm`
                                }
                            }
                        },
                        "002": {
                            complete: {
                                _markers: {
                                    loop: { start: 3000, end: 5967 }
                                },
                                combined: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Inward_Complete_002_Blue_1400x1400.webm`
                                },
                                part01: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Inward_Complete_002_Blue_1400x1400.webm`
                                },
                                part02: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Inward_Complete_002_Blue_1000x1000.webm`
                                }
                            },
                            loop: {
                                combined: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Inward_Loop_002_Blue_1400x1400.webm`
                                },
                                part01: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Inward_Loop_002_Blue_1400x1400.webm`
                                },
                                part02: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Inward_Loop_002_Blue_1000x1000.webm`
                                }
                            }
                        },
                        "003": {
                            complete: {
                                _markers: {
                                    loop: { start: 3000, end: 5967 }
                                },
                                combined: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Inward_Complete_003_Blue_1400x1400.webm`
                                },
                                part01: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Inward_Complete_003_Blue_1400x1400.webm`
                                },
                                part02: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Inward_Complete_003_Blue_1000x1000.webm`
                                }
                            },
                            loop: {
                                combined: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Inward_Loop_003_Blue_1400x1400.webm`
                                },
                                part01: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Inward_Loop_003_Blue_1400x1400.webm`
                                },
                                part02: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Inward_Loop_003_Blue_1000x1000.webm`
                                }
                            }                            
                        },
                        "004": {
                            complete: {
                                _markers: {
                                    loop: { start: 3000, end: 5967 }
                                },
                                combined: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Inward_Complete_004_Blue_1400x1400.webm`
                                },
                                part01: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Inward_Complete_004_Blue_1400x1400.webm`
                                },
                                part02: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Inward_Complete_004_Blue_1000x1000.webm`
                                }
                            },
                            loop: {
                                combined: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Inward_Loop_004_Blue_1400x1400.webm`
                                },
                                part01: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Inward_Loop_004_Blue_1400x1400.webm`
                                },
                                part02: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Inward_Loop_004_Blue_1000x1000.webm`
                                }
                            }
                        },
                        "005": {
                            complete: {
                                _markers: {
                                    loop: { start: 3000, end: 5967 }
                                },
                                combined: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Inward_Complete_005_Blue_1400x1400.webm`
                                },
                                part01: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Inward_Complete_005_Blue_1400x1400.webm`
                                },
                                part02: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Inward_Complete_005_Blue_1000x1000.webm`
                                }
                            },
                            loop: {
                                combined: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Inward_Loop_005_Blue_1400x1400.webm`
                                },
                                part01: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Inward_Loop_005_Blue_1400x1400.webm`
                                },
                                part02: {
                                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Inward_Loop_005_Blue_1000x1000.webm`
                                }
                            }
                        }
                },
                outward: {
                    "001": {
                        complete: {
                            _markers: {
                                loop: { start: 3000, end: 5967 }
                            },
                            combined: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Outward_Complete_001_Blue_1400x1400.webm`
                            },
                            part01: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Outward_Complete_001_Blue_1400x1400.webm`
                            },
                            part02: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Outward_Complete_001_Blue_1000x1000.webm`
                            }
                        },
                        loop: {
                            combined: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Outward_Loop_001_Blue_1400x1400.webm`
                            },
                            part01: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Outward_Loop_001_Blue_1400x1400.webm`
                            },
                            part02: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Outward_Loop_001_Blue_1000x1000.webm`
                            }
                        }
                    },
                    "002": {
                        complete: {
                            _markers: {
                                loop: { start: 3000, end: 5967 }
                            },
                            combined: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Outward_Complete_002_Blue_1400x1400.webm`
                            },
                            part01: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Outward_Complete_002_Blue_1400x1400.webm`
                            },
                            part02: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Outward_Complete_002_Blue_1000x1000.webm`
                            }
                        },
                        loop: {
                            combined: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Outward_Loop_002_Blue_1400x1400.webm`
                            },
                            part01: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Outward_Loop_002_Blue_1400x1400.webm`
                            },
                            part02: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Outward_Loop_002_Blue_1000x1000.webm`
                            }
                        }
                    },
                    "003": {
                        complete: {
                            _markers: {
                                loop: { start: 3000, end: 5967 }
                            },
                            combined: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Outward_Complete_003_Blue_1400x1400.webm`
                            },
                            part01: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Outward_Complete_003_Blue_1400x1400.webm`
                            },
                            part02: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Outward_Complete_003_Blue_1000x1000.webm`
                            }
                        },
                        loop: {
                            combined: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Outward_Loop_003_Blue_1400x1400.webm`
                            },
                            part01: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Outward_Loop_003_Blue_1400x1400.webm`
                            },
                            part02: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Outward_Loop_003_Blue_1000x1000.webm`
                            }
                        }                            
                    },
                    "004": {
                        complete: {
                            _markers: {
                                loop: { start: 3000, end: 5967 }
                            },
                            combined: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Outward_Complete_004_Blue_1400x1400.webm`
                            },
                            part01: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Outward_Complete_004_Blue_1400x1400.webm`
                            },
                            part02: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Outward_Complete_004_Blue_1000x1000.webm`
                            }
                        },
                        loop: {
                            combined: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Outward_Loop_004_Blue_1400x1400.webm`
                            },
                            part01: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Outward_Loop_004_Blue_1400x1400.webm`
                            },
                            part02: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Outward_Loop_004_Blue_1000x1000.webm`
                            }
                        }
                    },
                    "005": {
                        complete: {
                            _markers: {
                                loop: { start: 3000, end: 5967 }
                            },
                            combined: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Outward_Complete_005_Blue_1400x1400.webm`
                            },
                            part01: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Outward_Complete_005_Blue_1400x1400.webm`
                            },
                            part02: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Outward_Complete_005_Blue_1000x1000.webm`
                            }
                        },
                        loop: {
                            combined: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003_Outward_Loop_005_Blue_1400x1400.webm`
                            },
                            part01: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part01_Outward_Loop_005_Blue_1400x1400.webm`
                            },
                            part02: {
                                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura003/Aura003Part02_Outward_Loop_005_Blue_1000x1000.webm`
                            }
                        }
                    }
                }
            },
            "04": {
                inward: {
                    "001": {
                        complete: {
                            _markers: {
                                loop: { start: 3000, end: 5967 }
                            },
                            combined: {
                                refraction: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura004/Aura004_Inward_Complete_001_Refraction_1400x1400.webm`
                            },
                            part01: {
                                refraction: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura004/Aura004Part01_Inward_Complete_001_Refraction_1400x1400.webm`
                            },
                            part02: {
                                refraction: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura004/Aura004Part02_Inward_Complete_001_Refraction_1000x1000.webm`
                            }
                        },
                        loop: {
                            combined: {
                                refraction: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura004/Aura004_Inward_Loop_001_Refraction_1400x1400.webm`
                            },
                            part01: {
                                refraction: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura004/Aura004Part01_Inward_Loop_001_Refraction_1400x1400.webm`
                            },
                            part02: {
                                refraction: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura004/Aura004Part02_Inward_Loop_001_Refraction_1000x1000.webm`
                            }
                        }
                    }
                },
                outward: {
                    "001": {
                        complete: {
                            _markers: {
                                loop: { start: 3000, end: 5967 }
                            },
                            combined: {
                                refraction: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura004/Aura004_Outward_Complete_001_Refraction_1400x1400.webm`
                            },
                            part01: {
                                refraction: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura004/Aura004Part01_Outward_Complete_001_Refraction_1400x1400.webm`
                            },
                            part02: {
                                refraction: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura004/Aura004Part02_Outward_Complete_001_Refraction_1000x1000.webm`
                            }
                        },
                        loop: {
                            combined: {
                                refraction: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura004/Aura004_Outward_Loop_001_Refraction_1400x1400.webm`
                            },
                            part01: {
                                refraction: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura004/Aura004Part01_Outward_Loop_001_Refraction_1400x1400.webm`
                            },
                            part02: {
                                refraction: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Aura/Aura004/Aura004Part02_Outward_Loop_001_Refraction_1000x1000.webm`
                            }
                        }
                    }
                },
                }
        },
        lightning: {
            "01": {
                loop: {
                    bluepurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Lightning/TemplateCircleLightning01_01_Regular_BluePurple_Loop_700x700.webm`,
                }
            }
        },
        symbol: {
            normal: {
                drop: {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateDropCircle_01_Regular_Red_800x800.webm`
                },
                fear: {
                    dark_purple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateFearCircle_01_Dark_Purple_800x800.webm`
                },
                heart: {
                    pink: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateHeartCircle_01_Regular_Pink_800x800.webm`
                },
                horror: {
                    purple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateHorrorCircle_01_Regular_Purple_800x800.webm`

                },
                music_note: {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateMusicNoteCircle_01_Regular_Blue_800x800.webm`
                },
                poison: {
                    dark_green: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/TemplatePoisonCircle_01_Dark_Green_800x800.webm`
                },
                runes: {
                    orange: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateRunesCircle_01_Regular_Orange_800x800.webm`
                },
                shield: {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateShieldCircle_01_Regular_Green_800x800.webm`
                },
                shield_cracked: {
                    purple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateShieldCrackedCircle_01_Regular_Purple_800x800.webm`
                },
                skull: {
                    purple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateSkullCircle_01_Regular_Purple_800x800.webm`
                },
                snowflake: {

                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateSnowflakeCircle_01_Regular_Blue_800x800.webm`
                },
                stun: {
                    purple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateStunCircle_01_Regular_Purple_800x800.webm`
                }
            }
        },
        out_pulse: {
            '01': {
                burst: {
                    bluewhite: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_BlueWhite_Burst_600x600.webm`
                },
                loop: {
                    bluewhite: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_BlueWhite_Loop_600x600.webm`
                }
            },
            '02': {
                burst: {
                    bluewhite: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_BlueWhite_Burst_600x600.webm`
                },
                loop: {
                    bluewhite: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_BlueWhite_Loop_600x600.webm`
                }
            }
        },
        radar: {
            loop: {
                '001': {
                    '800px': {
                        greenpurple: [
                            `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_001_001_GreenPurple_15ft_800x800.webm`,
                            `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_001_002_GreenPurple_15ft_800x800.webm`,
                            `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_001_003_GreenPurple_15ft_800x800.webm`,
                        ]
                    },
                    '1400px': {
                            greenpurple: [
                                `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_001_001_GreenPurple_30ft_1400x1400.webm`,
                                `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_001_002_GreenPurple_30ft_1400x1400.webm`,
                                `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_001_003_GreenPurple_30ft_1400x1400.webm`,
                            ]
                        }
                },
                '002': {
                    '800px': {
                        greenpurple: [
                            `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_002_001_GreenPurple_15ft_800x800.webm`,
                            `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_002_002_GreenPurple_15ft_800x800.webm`,
                            `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_002_003_GreenPurple_15ft_800x800.webm`,
                        ]
                    },
                    '1400px': {
                            greenpurple: [
                                `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_002_001_GreenPurple_30ft_1400x1400.webm`,
                                `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_002_002_GreenPurple_30ft_1400x1400.webm`,
                                `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_002_003_GreenPurple_30ft_1400x1400.webm`,
                            ]
                        }
                },
                '800px': {
                    '001': {
                        bg: {
                            greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_BG_001_GreenPurple_15ft_800x800.webm`
                        },
                        pulse: {
                            greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_Pulse_001_GreenPurple_15ft_800x800.webm`
                        },
                        stillframe: {
                            greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_StillFrame_001_GreenPurple_15ft_800x800.webp`
                        },
                        sweep: {
                            greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_Sweep_001_GreenPurple_15ft_800x800.webm`
                        }
                    },
                    '002': {
                        pulse: {
                            greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_Pulse_002_GreenPurple_15ft_800x800.webm`
                        },
                        stillframe: {
                            greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_StillFrame_002_GreenPurple_15ft_800x800.webp`
                        },
                    }
                },
                '1400px': {
                        '001': {
                            bg: {
                                greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_BG_001_GreenPurple_30ft_1400x1400.webm`
                            },
                            pulse: {
                                greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_Pulse_001_GreenPurple_30ft_1400x1400.webm`
                            },
                            stillframe: {
                                greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_StillFrame_001_GreenPurple_30ft_1400x1400.webp`
                            },
                            sweep: {
                                greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_Sweep_001_GreenPurple_30ft_1400x1400.webm`
                            }
                        },
                        '002': {
                            pulse: {
                                greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_Pulse_002_GreenPurple_30ft_1400x1400.webm`
                            },
                            stillframe: {
                                greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_StillFrame_002_GreenPurple_30ft_1400x1400.webp`
                            },
                        }
                    },
                ping: {
                    '001': {
                        '300px': {
                            round: {
                                greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_PingRound_001_GreenPurple_Size1_300x300.webm`
                            },
                            square: {
                                greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_PingSquare_001_GreenPurple_Size1_300x300.webm`
                            },
                            triangle: {
                                greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_PingTriangle_001_GreenPurple_Size1_300x300.webm`
                            },
                        },
                        '500px': {
                            round: {
                                greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_PingRound_001_GreenPurple_Size2_500x500.webm`
                            },
                            square: {
                                greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_PingSquare_001_GreenPurple_Size2_500x500.webm`
                            },
                            triangle: {
                                greenpurple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Radar/RadarLoop_PingTriangle_001_GreenPurple_Size2_500x500.webm`
                            },
                        }
                    }
                }
            }
        },
        vortex: {
            loop: {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Vortex_01_Regular_Blue_600x600.webm`
            },
            intro: {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/VortexIntro_01_Regular_Blue_600x600.webm`
            },
            outro: {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/VortexOutro_01_Regular_Blue_600x600.webm`
            }
        },
        whirl: {
            loop: {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/Whirl_01_Regular_Blue_600x600.webm`
            },
            intro: {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/WhirlIntro_01_Regular_Blue_600x600.webm`
            },
            outro: {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Circle/WhirlOutro_01_Regular_Blue_600x600.webm`
            }
        }
    }
    freeDatabase.template_cone_5e = {
        _template: "cone100",

        lightning: {
            "01": {
                loop: {
                    bluepurple: {
                        "30ft": `${prefix}/JB2A_DnD5e/Library/Generic/Template/Cone/Lightning/TemplateCone5eLightning01_01_Regular_BluePurple_30ft_Loop_800x800.webm`,
                    }
                }
            }
        }
    }
    freeDatabase.template_cone_PF2e = {
        _template: "cone100",

        lightning: {
            "01": {
                loop: {
                    bluepurple: {
                        "30ft": `${prefix}/JB2A_DnD5e/Library/Generic/Template/Cone/Lightning/TemplateConePF2eLightning01_01_Regular_BluePurple_30ft_Loop_800x1000.webm`,
                    }
                }
            }
        }
    }
    freeDatabase.template_line = {
        _template: "line200",
        ice: {
            '01': {
                blue: {
                    '15ft':`${prefix}/JB2A_DnD5e/Library/Generic/Template/Line/Ice/TemplateLineIce01_01_Regular_Blue_15ft_1000x400.webm`,
                    '30ft':`${prefix}/JB2A_DnD5e/Library/Generic/Template/Line/Ice/TemplateLineIce01_01_Regular_Blue_30ft_1600x400.webm`,
                    '60ft':`${prefix}/JB2A_DnD5e/Library/Generic/Template/Line/Ice/TemplateLineIce01_01_Regular_Blue_60ft_2800x400.webm`
                }
            }
        }
}
freeDatabase.template_line_piercing = {
    _template: "line200B",
    generic: {
        '01': {
            orange: {
                '15ft':`${prefix}/JB2A_DnD5e/Library/Generic/Template/Line/Generic/Piercing_Generic01_01_Regular_Orange_1000x400.webm`,
            }
        }
    }
}
    freeDatabase.template_square = {
        symbol: {
            normal: {
                drop: {
                    red: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Square/TemplateDropSquare_01_Regular_Red_600x600.webm`
                },
                fear: {
                    dark_purple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Square/TemplateFearSquare_01_Dark_Purple_600x600.webm`
                },
                heart: {
                    pink: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Square/TemplateHeartSquare_01_Regular_Pink_600x600.webm`
                },
                horror: {
                    purple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Square/TemplateHorrorSquare_01_Regular_Purple_600x600.webm`
                },
                music_note: {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Square/TemplateMusicNoteSquare_01_Regular_Blue_600x600.webm`
                },
                poison: {
                    dark_green: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Square/TemplatePoisonSquare_01_Dark_Green_600x600.webm`
                },
                runes: {
                    orange: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Square/TemplateRunesSquare_01_Regular_Orange_600x600.webm`
                },
                shield: {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Square/TemplateShieldSquare_01_Regular_Green_600x600.webm`,
                },
                shield_cracked: {
                    purple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Square/TemplateShieldCrackedSquare_01_Regular_Purple_600x600.webm`,
                },
                skull: {
                    purple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Square/TemplateSkullSquare_01_Regular_Purple_600x600.webm`,
                },
                snowflake: {
                    blue: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Square/TemplateSnowflakeSquare_01_Regular_Blue_600x600.webm`
                },
                stun: {
                    purple: `${prefix}/JB2A_DnD5e/Library/Generic/Template/Square/TemplateStunSquare_01_Regular_Purple_600x600.webm`
                }
            },
        }
    }
    freeDatabase.token_border = {
        circle: {
            static: {
                blue: {
                    '001': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircle_01_Regular_Blue_400x400.webm`,
                    '002': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircle_02_Regular_Blue_400x400.webm`,
                    '003': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircle_03_Regular_Blue_400x400.webm`,
                    '004': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircle_04_Regular_Blue_400x400.webm`,
                    '005': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircle_05_Regular_Blue_400x400.webm`,
                    '006': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircle_06_Regular_Blue_400x400.webm`,
                    '007': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircle_07_Regular_Blue_400x400.webm`
                }
            },
            spinning: {
                blue: {
                    '001': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircleSpin_01_Regular_Blue_400x400.webm`,
                    '002': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircleSpin_02_Regular_Blue_400x400.webm`,
                    '003': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircleSpin_03_Regular_Blue_400x400.webm`,
                    '004': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircleSpin_04_Regular_Blue_400x400.webm`,
                    '005': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircleSpin_05_Regular_Blue_400x400.webm`,
                    '006': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircleSpin_06_Regular_Blue_400x400.webm`,
                    '007': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircleSpin_07_Regular_Blue_400x400.webm`
                }
            }
        }
    }
    freeDatabase.token_stage = {
        round: {
            blue: {
                '01': {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Stage/TokenStageRound01_01_Regular_Blue_400x400.webm`,
                    '02': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Stage/TokenStageRound01_02_Regular_Blue_400x400.webm`,
                    '03': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Stage/TokenStageRound01_03_Regular_Blue_400x400.webm`,
                    '04': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Stage/TokenStageRound01_04_Regular_Blue_400x400.webm`,
                    '05': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Stage/TokenStageRound01_05_Regular_Blue_400x400.webm`,
                    '06': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Stage/TokenStageRound01_06_Regular_Blue_400x400.webm`
                },
                '02': {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Stage/TokenStageRound02_01_Regular_Blue_400x400.webm`,
                    '02': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Stage/TokenStageRound02_02_Regular_Blue_400x400.webm`,
                    '03': `${prefix}/JB2A_DnD5e/Library/Generic/Token_Stage/TokenStageRound02_03_Regular_Blue_400x400.webm`
                }
            }
        }
    }
    freeDatabase.toll_the_dead = {
        green: {
            bell: `${prefix}/JB2A_DnD5e/Library/Cantrip/Toll_The_Dead/TollTheDeadBell_01_Regular_Green_400x400.webm`,
            complete: `${prefix}/JB2A_DnD5e/Library/Cantrip/Toll_The_Dead/TollTheDead_01_Regular_Green_400x400.webm`,
            shockwave: `${prefix}/JB2A_DnD5e/Library/Cantrip/Toll_The_Dead/TollTheDeadShockwave_01_Regular_Green_400x400.webm`,
            skull_smoke: `${prefix}/JB2A_DnD5e/Library/Cantrip/Toll_The_Dead/TollTheDeadSkullSmoke_01_Regular_Green_400x400.webm`
        }
    }
    freeDatabase.throwable = {
        _template: 'ranged',
        launch: {
            cannon_ball: {
                '01': {
                    black: {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaunchCannonBall01_01_Regular_Black_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaunchCannonBall01_01_Regular_Black_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaunchCannonBall01_01_Regular_Black_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaunchCannonBall01_01_Regular_Black_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaunchCannonBall01_01_Regular_Black_90ft_4000x400.webm`
                    }
                }
            },
            missile: {
                '01': {
                    blue: {
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Missile01_01_Regular_Blue_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Missile01_01_Regular_Blue_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Missile01_01_Regular_Blue_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Missile01_01_Regular_Blue_90ft_4000x400.webm`
                    }
                }
            }
        },
        throw: {
            bomb: {
                '01': {
                    black: {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/ThrowBomb01_01_Regular_Black_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/ThrowBomb01_01_Regular_Black_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/ThrowBomb01_01_Regular_Black_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/ThrowBomb01_01_Regular_Black_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/ThrowBomb01_01_Regular_Black_90ft_4000x400.webm`
                    }
                }
            },
            flask: {
                '01': {
                    orange: {
                        '05ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_Orange_05ft_600x400.webm`,
                        '15ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_Orange_15ft_1000x400.webm`,
                        '30ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_Orange_30ft_1600x400.webm`,
                        '60ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_Orange_60ft_2800x400.webm`,
                        '90ft': `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_Orange_90ft_4000x400.webm`
                    }
                }
            }
        }
    }
    freeDatabase.thunderwave = {
        bottom_left: {
            blue: `${prefix}/JB2A_DnD5e/Library/1st_Level/Thunderwave/Thunderwave_01_Bright_Blue_BLeft_600x600.webm`
        },
        bottom_middle: {
            blue: `${prefix}/JB2A_DnD5e/Library/1st_Level/Thunderwave/Thunderwave_01_Bright_Blue_BMid_600x600.webm`
        },
        center: {
            blue: `${prefix}/JB2A_DnD5e/Library/1st_Level/Thunderwave/Thunderwave_01_Bright_Blue_Center_600x600.webm`
        }
    }
    freeDatabase.twinkling_stars = {
        points04: {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_04_Orange_100x100.webm`,
            white: `${prefix}/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_04_100x100.webm`
        },
        points05: {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_05_Orange_100x100.webm`,
            white: `${prefix}/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_05_100x100.webm`
        },
        points06: {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_06_Orange_100x100.webm`,
            white: `${prefix}/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_06_100x100.webm`
        },
        points07: {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_07_Orange_100x100.webm`,
            white: `${prefix}/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_07_100x100.webm`
        },
        points08: {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_08_Orange_100x100.webm`,
            white: `${prefix}/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_08_100x100.webm`
        },
        points09: {
            orange: `${prefix}/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_09_Orange_100x100.webm`,
            white: `${prefix}/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_09_100x100.webm`
        }
    }
    freeDatabase.ui = {
        chevrons3: {
            yellow: `${prefix}/JB2A_DnD5e/Library/Generic/UI/3Chevrons_01_Regular_Yellow_200x200.webm`
        },
        critical: {
            red: [
                `${prefix}/JB2A_DnD5e/Library/Generic/UI/Critical_02_Red_200x200.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/UI/Critical_03_Red_200x200.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/UI/Critical_04_Red_200x200.webm`,
            ],
        },
        critical_miss: {
            red: [
                `${prefix}/JB2A_DnD5e/Library/Generic/UI/CriticalMiss_02_Red_200x200.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/UI/CriticalMiss_03_Red_200x200.webm`,
                `${prefix}/JB2A_DnD5e/Library/Generic/UI/CriticalMiss_04_Red_200x200.webm`,
            ]
        },
        heartbeat: {
            '01': {
                green: `${prefix}/JB2A_DnD5e/Library/Generic/UI/HeartbeatECG01_01_Regular_Green_400x400.webm`
            },
            '02': {
                green: `${prefix}/JB2A_DnD5e/Library/Generic/UI/HeartbeatECG01_02_Regular_Green_400x400.webm`
            },
        },
        indicator: {
            yellow: {
                '01': {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/UI/Indicator_01_Regular_Yellow_200x200.webm`
                }
            },
            bluegreen: {
                '02': {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/UI/Indicator01_02_Regular_BlueGreen_400x400.webm`,
                    '02': `${prefix}/JB2A_DnD5e/Library/Generic/UI/Indicator02_02_Regular_BlueGreen_400x400.webm`
                },
                '03': {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/UI/Indicator01_03_Regular_BlueGreen_200x200.webm`,
                    '02': `${prefix}/JB2A_DnD5e/Library/Generic/UI/Indicator02_03_Regular_BlueGreen_200x200.webm`
                }
            }
        },
        miss: {
            white: `${prefix}/JB2A_DnD5e/Library/Generic/UI/Miss_02_White_200x200.webm`
        }
    }
    freeDatabase.unarmed_strike = {
        _template: 'melee',
        magical: {
            '01': {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Magical01_800x600.webm`
            },
            '02': {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Magical02_800x600.webm`
            }
        },
        physical: {
            '01': {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Physical01_800x600.webm`
            },
            '02': {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Physical02_800x600.webm`
            }
        }
    }
    freeDatabase.vine = {
        complete: {
            _markers: {
                loop: { start: 2125, end: 6250 }
            },
            nature: {
                group: {
                    '01': {
                        green: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/GroupVineNature01_01_Regular_Green_300x300.webm`
                    },
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/GroupVineNature02_01_Regular_Green_300x300.webm`
                    },
                    '03': {
                        green: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/GroupVineNature03_01_Regular_Green_300x300.webm`
                    }
                },
                single: {
                    '01': {
                        green: [
                            `${prefix}/JB2A_DnD5e/Library/Generic/Nature/VineNature01_01_Regular_Green_300x300.webm`,
                            `${prefix}/JB2A_DnD5e/Library/Generic/Nature/VineNature01_02_Regular_Green_300x300.webm`,
                            `${prefix}/JB2A_DnD5e/Library/Generic/Nature/VineNature01_03_Regular_Green_300x300.webm`
                        ]
                    },
                    '02': {
                        green: [
                            `${prefix}/JB2A_DnD5e/Library/Generic/Nature/VineNature02_01_Regular_Green_300x300.webm`,
                            `${prefix}/JB2A_DnD5e/Library/Generic/Nature/VineNature02_02_Regular_Green_300x300.webm`,
                            `${prefix}/JB2A_DnD5e/Library/Generic/Nature/VineNature02_03_Regular_Green_300x300.webm`
                        ]
                    },
                    '03': {
                        green: [
                            `${prefix}/JB2A_DnD5e/Library/Generic/Nature/VineNature03_01_Regular_Green_300x300.webm`,
                            `${prefix}/JB2A_DnD5e/Library/Generic/Nature/VineNature03_02_Regular_Green_300x300.webm`,
                            `${prefix}/JB2A_DnD5e/Library/Generic/Nature/VineNature03_03_Regular_Green_300x300.webm`
                        ]
                    }
                }
            }
        },
        loop: {
            nature: {
                group: {
                    '01': {
                        green: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/GroupVineNatureLoop01_01_Regular_Green_300x300.webm`
                    },
                    '02': {
                        green: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/GroupVineNatureLoop02_01_Regular_Green_300x300.webm`
                    },
                    '03': {
                        green: `${prefix}/JB2A_DnD5e/Library/Generic/Nature/GroupVineNatureLoop03_01_Regular_Green_300x300.webm`
                    }
                },
                single: {
                    '01': {
                        green: [
                            `${prefix}/JB2A_DnD5e/Library/Generic/Nature/VineNatureLoop01_01_Regular_Green_300x300.webm`,
                            `${prefix}/JB2A_DnD5e/Library/Generic/Nature/VineNatureLoop01_02_Regular_Green_300x300.webm`,
                            `${prefix}/JB2A_DnD5e/Library/Generic/Nature/VineNatureLoop01_03_Regular_Green_300x300.webm`
                        ]
                    },
                    '02': {
                        green: [
                            `${prefix}/JB2A_DnD5e/Library/Generic/Nature/VineNatureLoop02_01_Regular_Green_300x300.webm`,
                            `${prefix}/JB2A_DnD5e/Library/Generic/Nature/VineNatureLoop02_02_Regular_Green_300x300.webm`,
                            `${prefix}/JB2A_DnD5e/Library/Generic/Nature/VineNatureLoop02_03_Regular_Green_300x300.webm`
                        ]
                    },
                    '03': {
                        green: [
                            `${prefix}/JB2A_DnD5e/Library/Generic/Nature/VineNatureLoop03_01_Regular_Green_300x300.webm`,
                            `${prefix}/JB2A_DnD5e/Library/Generic/Nature/VineNatureLoop03_02_Regular_Green_300x300.webm`,
                            `${prefix}/JB2A_DnD5e/Library/Generic/Nature/VineNatureLoop03_03_Regular_Green_300x300.webm`
                        ]
                    }
                }
            }
        }
    }
    freeDatabase.wall_of_fire = {
        '100x100': {
            blue: `${prefix}/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Blue_100x100.webm`,
            yellow: `${prefix}/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Yellow_100x100.webm`
        },
        '200x100': {
            blue: `${prefix}/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Blue_200x100.webm`,
            yellow: `${prefix}/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Yellow_200x100.webm`
        },
        '300x100': {
            blue: `${prefix}/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Blue_300x100.webm`,
            yellow: `${prefix}/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Yellow_300x100.webm`
        },
        '500x100': {
            blue: `${prefix}/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Blue_Ring_400x400.webm`,
            yellow: `${prefix}/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Yellow_Ring_400x400.webm`
        },
        Ring: {
            blue: `${prefix}/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Blue_Ring_400x400.webm`,
            yellow: `${prefix}/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Yellow_Ring_400x400.webm`
        }
    }
    freeDatabase.wall_of_force = {
        horizontal: {
            grey: `${prefix}/JB2A_DnD5e/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Grey_H_200x200.webm`
        },
        sphere: {
            grey: `${prefix}/JB2A_DnD5e/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Grey_Sphere_400x400.webm`
        },
        vertical: {
            grey: `${prefix}/JB2A_DnD5e/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Grey_V_200x25.webm`
        }
    }
    freeDatabase.ward = {
        rune: {
            yellow: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/WardRune_01_Regular_Yellow_600x600.webm`
            }
        },
        star: {
            yellow: {
                '01': `${prefix}/JB2A_DnD5e/Library/Generic/Marker/WardStar_01_Regular_Yellow_600x600.webm`
            }
        }
    }
    freeDatabase.warhammer = {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Warhammer01_01_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Warhammer01_02_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Warhammer01_03_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Warhammer01_04_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Warhammer01_05_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Warhammer01_06_Regular_White_800x600.webm`
                ]
            }
        }
    }
    freeDatabase.water_splash = {
        circle: {
            '01': {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Liquid/WaterSplashLoop_01_01_Regular_Blue_600x600.webm`
            }
        },
        cone: {
            _template: 'cone',
            '01': {
                blue: `${prefix}/JB2A_DnD5e/Library/Generic/Liquid/WaterSplashConeLoop_01_01_Regular_Blue_600x600.webm`
            }
        }
    }
    freeDatabase.web = {
        '01': `${prefix}/JB2A_DnD5e/Library/2nd_Level/Web/Web_01_White_01_400x400.webm`,
        '02': `${prefix}/JB2A_DnD5e/Library/2nd_Level/Web/Web_01_White_02_400x400.webm`
    }
    freeDatabase.wind_lines = {
        '01': {
            '01': {
                white: `${prefix}/JB2A_DnD5e/Library/Generic/Wind/WindLines01_01_Regular_White_500x500.webm`
            },
            '02': {
                white: `${prefix}/JB2A_DnD5e/Library/Generic/Wind/WindLines01_02_Regular_White_500x500.webm`
            },
            'leaves': {
                '01': {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Wind/WindLinesLeaves01_01_Regular_Green_500x500.webm`
                },
                '02': {
                    green: `${prefix}/JB2A_DnD5e/Library/Generic/Wind/WindLinesLeaves01_02_Regular_Green_500x500.webm`
                }
            }
        }
}
    freeDatabase.whirlwind = {
        bluegrey: `${prefix}/JB2A_DnD5e/Library/7th_Level/Whirlwind/Whirlwind_01_BlueGrey_01_400x400.webm`
    }
    freeDatabase.wind_wall = {
        '100x100': `${prefix}/JB2A_DnD5e/Library/3rd_Level/Wind_Wall/WindWall_01_100x100.webm`,
        '200x100': `${prefix}/JB2A_DnD5e/Library/3rd_Level/Wind_Wall/WindWall_01_200x100.webm`,
        '300x100': `${prefix}/JB2A_DnD5e/Library/3rd_Level/Wind_Wall/WindWall_01_300x100.webm`,
        '500x100': `${prefix}/JB2A_DnD5e/Library/3rd_Level/Wind_Wall/WindWall_01_500x100.webm`
    }
    freeDatabase.wind_stream = {
        white: `${prefix}/JB2A_DnD5e/Library/Generic/Wind/WindStreams_01_White_20OPA_1200x1200.webm`
    }
    freeDatabase.witch_bolt = {
        _template: 'ranged',
        blue: {
            '05ft': `${prefix}/JB2A_DnD5e/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Blue_05ft_600x400.webm`,
            '15ft': `${prefix}/JB2A_DnD5e/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Blue_15ft_1000x400.webm`,
            '30ft': `${prefix}/JB2A_DnD5e/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Blue_30ft_1600x400.webm`,
            '60ft': `${prefix}/JB2A_DnD5e/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Blue_60ft_2800x400.webm`,
            '90ft': `${prefix}/JB2A_DnD5e/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Blue_90ft_4000x400.webm`
        }
    }
    freeDatabase.wrench = {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Wrench01_01_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Wrench01_02_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Wrench01_03_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Wrench01_04_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Wrench01_05_Regular_White_800x600.webm`,
                    `${prefix}/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Wrench01_06_Regular_White_800x600.webm`
                ]
            }
        }
    }
    freeDatabase.zoning = {
        ground: {
            circle: {
                '01': {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCircle01_01_600x600.webp`
                }
            },
            cone: {
                '01': {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone01_01_600x600.webp`,
                    '04': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone04_01_600x600.webp`,
                    '05': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone05_01_600x600.webp`,
                }
            },
            square: {
                '01': {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningSquare01_01_600x600.webp`,
                    '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningSquare02_01_600x600.webp`
                }
            },
            indicator: {
                inward: {
                    '01': {
                        '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator01In_01_600x600.webp`,
                        '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator02In_01_600x600.webp`
                    },
                    '02': {
                        '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator01In_02_600x600.webp`,
                        '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator02In_02_600x600.webp`
                    }
                },
                outward: {
                    '01': {
                        '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator01Out_01_600x600.webp`,
                        '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator02Out_01_600x600.webp`
                    },
                    '02': {
                        '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator01Out_02_600x600.webp`,
                        '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator02Out_02_600x600.webp`
                    }
                }
            },
            directional: {
                line200: {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/DirectionalIndicator01Line_01_200x200.webp`,
                    '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/DirectionalIndicator02Line_01_200x200.webp`
                },
                line400: {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/DirectionalIndicator01Line_02_400x200.webp`,
                    '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/DirectionalIndicator02Line_02_400x200.webp`
                },
                single: {
                    '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/DirectionalIndicator01Single_01_200x200.webp`,
                    '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/DirectionalIndicator02Single_01_200x200.webp`
                }
            }
        },
        inward: {
            circle: {
                once: {
                    bluegreen: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCircle01In_01_Regular_BlueGreen_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCircle02In_01_Regular_BlueGreen_600x600.webm`
                        }
                    },
                },
                loop: {
                    bluegreen: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCircle01In_01_Regular_BlueGreen_Loop_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCircle02In_01_Regular_BlueGreen_Loop_600x600.webm`
                        }
                    }
                }
            },
            cone: {
                once: {
                    bluegreen: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone01In_01_Regular_BlueGreen_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone02In_01_Regular_BlueGreen_600x600.webm`,
                            '04': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone04In_01_Regular_BlueGreen_600x600.webm`,
                            '05': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone05In_01_Regular_BlueGreen_600x600.webm`,
                        }
                    }
                },
                loop: {
                    bluegreen: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone01In_01_Regular_BlueGreen_Loop_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone02In_01_Regular_BlueGreen_Loop_600x600.webm`,
                            '04': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone04In_01_Regular_BlueGreen_Loop_600x600.webm`,
                            '05': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone05In_01_Regular_BlueGreen_Loop_600x600.webm`,
                        }
                    }
                }
            },
            square: {
                once: {
                    bluegreen: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningSquare01In_01_Regular_BlueGreen_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningSquare02In_01_Regular_BlueGreen_600x600.webm`
                        }
                    }
                },
                loop: {
                    bluegreen: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningSquare01In_01_Regular_BlueGreen_Loop_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningSquare02In_01_Regular_BlueGreen_Loop_600x600.webm`
                        }
                    }
                }
            },
            indicator: {
                once: {
                    bluegreen: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator01In_01_Regular_BlueGreen_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator02In_01_Regular_BlueGreen_600x600.webm`
                        },
                        '02': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator01In_02_Regular_BlueGreen_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator02In_02_Regular_BlueGreen_600x600.webm`
                        }
                    }
                },
                loop: {
                    bluegreen: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator01In_01_Regular_BlueGreen_Loop_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator02In_01_Regular_BlueGreen_Loop_600x600.webm`
                        },
                        '02': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator01In_02_Regular_BlueGreen_Loop_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator02In_02_Regular_BlueGreen_Loop_600x600.webm`
                        }
                    }
                }
            }
        },
        outward: {
            circle: {
                once: {
                    bluegreen: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCircle01Out_01_Regular_BlueGreen_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCircle02Out_01_Regular_BlueGreen_600x600.webm`
                        }
                    }
                },
                loop: {
                    bluegreen: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCircle01Out_01_Regular_BlueGreen_Loop_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCircle02Out_01_Regular_BlueGreen_Loop_600x600.webm`
                        }
                    }
                }
            },
            cone: {
                once: {
                    bluegreen: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone01Out_01_Regular_BlueGreen_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone02Out_01_Regular_BlueGreen_600x600.webm`,
                            '04': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone04Out_01_Regular_BlueGreen_600x600.webm`,
                            '05': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone05Out_01_Regular_BlueGreen_600x600.webm`,
                        }
                    }
                },
                loop: {
                    bluegreen: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone01Out_01_Regular_BlueGreen_Loop_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone02Out_01_Regular_BlueGreen_Loop_600x600.webm`,
                            '04': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone04Out_01_Regular_BlueGreen_Loop_600x600.webm`,
                            '05': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningCone05Out_01_Regular_BlueGreen_Loop_600x600.webm`,
                        }
                    }
                }
            },
            square: {
                once: {
                    bluegreen: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningSquare01Out_01_Regular_BlueGreen_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningSquare02Out_01_Regular_BlueGreen_600x600.webm`
                        }
                    }
                },
                loop: {
                    bluegreen: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningSquare01Out_01_Regular_BlueGreen_Loop_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningSquare02Out_01_Regular_BlueGreen_Loop_600x600.webm`
                        }
                    }
                }
            },
            indicator: {
                once: {
                    bluegreen: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator01Out_01_Regular_BlueGreen_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator02Out_01_Regular_BlueGreen_600x600.webm`
                        },
                        '02': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator01Out_02_Regular_BlueGreen_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator02Out_02_Regular_BlueGreen_600x600.webm`
                        }
                    }
                },
                loop: {
                    bluegreen: {
                        '01': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator01Out_01_Regular_BlueGreen_Loop_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator02Out_01_Regular_BlueGreen_Loop_600x600.webm`
                        },
                        '02': {
                            '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator01Out_02_Regular_BlueGreen_Loop_600x600.webm`,
                            '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/ZoningIndicator02Out_02_Regular_BlueGreen_Loop_600x600.webm`
                        }
                    }
                }
            }
        },
        directional: {
            once: {
                bluegreen: {
                    line200: {
                        '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/DirectionalIndicator01Line_01_Regular_BlueGreen_200x200.webm`,
                        '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/DirectionalIndicator02Line_01_Regular_BlueGreen_200x200.webm`
                    },
                    line400: {
                        '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/DirectionalIndicator01Line_02_Regular_BlueGreen_400x200.webm`,
                        '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/DirectionalIndicator02Line_02_Regular_BlueGreen_400x200.webm`
                    },
                    single: {
                        '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/DirectionalIndicator01Single_01_Regular_BlueGreen_200x200.webm`,
                        '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/DirectionalIndicator02Single_01_Regular_BlueGreen_200x200.webm`
                    }
                }
            },
            loop: {
                bluegreen: {
                    line200: {
                        '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/DirectionalIndicator01Line_01_Regular_BlueGreen_Loop_200x200.webm`,
                        '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/DirectionalIndicator02Line_01_Regular_BlueGreen_Loop_200x200.webm`
                    },
                    line400: {
                        '01': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/DirectionalIndicator01Line_02_Regular_BlueGreen_Loop_400x200.webm`,
                        '02': `${prefix}/JB2A_DnD5e/Library/Generic/Zoning/DirectionalIndicator02Line_02_Regular_BlueGreen_Loop_400x200.webm`
                    }
                }
            }
        }
    }

}

export { freeDatabase }

