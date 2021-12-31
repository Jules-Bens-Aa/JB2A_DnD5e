let freeDatabase = {
    _templates: {
        default: [100, 0, 0],
        cone: [100, 0, 0],
        cone100: [100, 100, 100],
        cone200: [200, 100, 100],
        large: [200, 0, 0],
        melee: [200, 300, 300],
        ranged: [200, 200, 200],
        ray: [100, 0, 0]
    },
    antilife_shell: {
        blue_no_circle: 'modules/JB2A_DnD5e/Library/5th_Level/Antilife_Shell/AntilifeShell_01_Blue_NoCircle_400x400.webm',
        blue_with_circle: 'modules/JB2A_DnD5e/Library/5th_Level/Antilife_Shell/AntilifeShell_01_Blue_Circle_400x400.webm'
    },
    arcane_hand: {
        blue: 'modules/JB2A_DnD5e/Library/5th_Level/Arcane_Hand/ArcaneHand_Human_01_Idle_Blue_400x400.webm',
        green: 'modules/JB2A_DnD5e/Library/5th_Level/Arcane_Hand/ArcaneHand_Human_01_Idle_Green_400x400.webm',
        purple: 'modules/JB2A_DnD5e/Library/5th_Level/Arcane_Hand/ArcaneHand_Human_01_Idle_Purple_400x400.webm',
        red: 'modules/JB2A_DnD5e/Library/5th_Level/Arcane_Hand/ArcaneHand_Human_01_Idle_Red_400x400.webm',
    },
    arms_of_hadar: {
        dark_purple: 'modules/JB2A_DnD5e/Library/1st_Level/Arms_Of_Hadar/ArmsOfHadar_01_Dark_Purple_500x500.webm'
    },
    arrow: {
        _template: 'ranged',
        physical: {
            blue: {
                '05ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_05ft_600x400.webm',
                '15ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_15ft_1000x400.webm',
                '30ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_30ft_1600x400.webm',
                '60ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_60ft_2800x400.webm',
                '90ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_90ft_4000x400.webm'
            },

            white: {
                '01': {
                    '05ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_White_05ft_600x400.webm',
                    '15ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_White_15ft_1000x400.webm',
                    '30ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_White_30ft_1600x400.webm',
                    '60ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_White_60ft_2800x400.webm',
                    '90ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_White_90ft_4000x400.webm'
                },
            }
        },
        poison: {
            green: {
                '01': {
                    '05ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_Green_05ft_600x400.webm',
                    '15ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_Green_15ft_1000x400.webm',
                    '30ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_Green_30ft_1600x400.webm',
                    '60ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_Green_60ft_2800x400.webm',
                    '90ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Arrow01_01_Regular_Green_90ft_4000x400.webm'
                },
            }
        }
    },
    bardic_inspiration: {
        greenorange: 'modules/JB2A_DnD5e/Library/1st_Level/Bardic_Inspiration/BardicInspiration_01_Regular_GreenOrange_400x400.webm',
    },
    bite: {
        '200px': {
            red: 'modules/JB2A_DnD5e/Library/Generic/Creature/Bite_01_Regular_Red_200x200.webm',
        },
        '400px': {
            red: 'modules/JB2A_DnD5e/Library/Generic/Creature/Bite_01_Regular_Red_400x400.webm',
        }
    },
    black_tentacles: {
        dark_purple: 'modules/JB2A_DnD5e/Library/4th_Level/Black_Tentacles/BlackTentacles_01_Dark_Purple_600x600.webm'
    },
    bless: {
        '200px': {
            intro: {
                yellow: 'modules/JB2A_DnD5e/Library/1st_Level/Bless/Bless_01_Regular_Yellow_Intro_200x200.webm'
            },
            loop: {
                yellow: 'modules/JB2A_DnD5e/Library/1st_Level/Bless/Bless_01_Regular_Yellow_Loop_200x200.webm'
            }
        },
        '400px': {
            intro: {
                yellow: 'modules/JB2A_DnD5e/Library/1st_Level/Bless/Bless_01_Regular_Yellow_Intro_400x400.webm'
            },
            loop: {
                yellow: 'modules/JB2A_DnD5e/Library/1st_Level/Bless/Bless_01_Regular_Yellow_Loop_400x400.webm'
            }
        }
    },
    bolt: {
        _template: 'ranged',
        physical: {
            orange: {
                '05ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_05ft_600x400.webm',
                '15ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_15ft_1000x400.webm',
                '30ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_30ft_1600x400.webm',
                '60ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_60ft_2800x400.webm',
                '90ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_90ft_4000x400.webm'
            },
        },
    },
    bonfire: {
        '01': {
            orange: 'modules/JB2A_DnD5e/Library/Generic/Fire/Campfire/Bonfire_01_Regular_Orange_400x400.webm',
        },
    },
    braziers: {
        orange: {
            bordered: {
                '01': {
                    '05x05ft': 'modules/JB2A_DnD5e/Library/Generic/Fire/Brazier/Brazier_01_Wall_Orange_05x05ft_200x200.webm',
                    '10x05ft': 'modules/JB2A_DnD5e/Library/Generic/Fire/Brazier/Brazier_01_Wall_Orange_10x05ft_400x200.webm',
                    '10x10ft': 'modules/JB2A_DnD5e/Library/Generic/Fire/Brazier/Brazier_01_Wall_Orange_10x10ft_400x400.webm'
                },
            },
        },
        extinguished: {
            bordered: {
                '01': {
                    '05x05ft': 'modules/JB2A_DnD5e/Library/Generic/Fire/Brazier/Brazier_01_Wall_Black_05x05ft.webp',
                    '10x05ft': 'modules/JB2A_DnD5e/Library/Generic/Fire/Brazier/Brazier_01_Wall_Black_10x05ft.webp',
                    '10x10ft': 'modules/JB2A_DnD5e/Library/Generic/Fire/Brazier/Brazier_01_Wall_Black_10x10ft.webp'
                },
            },
        }
    },
    breath_weapons: {
        acid: {
            line: {
                _template: "ray",
                green: 'modules/JB2A_DnD5e/Library/Generic/Template/Line/Breath_Weapon/BreathWeapon_Acid01_Regular_Green_30ft_Line_Burst_1200x200.webm',
            }
        },
        cold: {
            cone: {
                _template: "cone",
                blue: 'modules/JB2A_DnD5e/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Cold01_Regular_Blue_30ft_Cone_Burst_600x600.webm',
            }
        },
        fire: {
            cone: {
                _template: "cone",
                orange: {
                    '01': 'modules/JB2A_DnD5e/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Fire01_Regular_Orange_30ft_Cone_Burst_600x600.webm',
                },
            },
            line: {
                _template: "line",
                orange: 'modules/JB2A_DnD5e/Library/Generic/Template/Line/Breath_Weapon/BreathWeapon_Fire01_Regular_Orange_30ft_Line_Burst_1200x200.webm',
            }
        },
        lightning: {
            line: {
                _template: "line",
                blue: 'modules/JB2A_DnD5e/Library/Generic/Template/Line/Breath_Weapon/BreathWeapon_Lightning01_Regular_Blue_30ft_Line_Burst_1200x200.webm',
            }
        },
        poison: {
            cone: {
                _template: "cone",
                green: 'modules/JB2A_DnD5e/Library/Generic/Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Green_30ft_Cone_Burst_600x600.webm',
            }
        }
    },
    bullet: {
        _template: 'ranged',
        '01': {
            orange: {
                '05ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_05ft_600x400.webm',
                '15ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_15ft_1000x400.webm',
                '30ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_30ft_1600x400.webm',
                '60ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_60ft_2800x400.webm',
                '90ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_90ft_4000x400.webm'
            }
        },
        '02': {
            orange: {
                '05ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_05ft_600x400.webm',
                '15ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_15ft_1000x400.webm',
                '30ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_30ft_1600x400.webm',
                '60ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_60ft_2800x400.webm',
                '90ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_90ft_4000x400.webm'
            },
        },
        '03': {
            blue: {
                '05ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_05ft_600x400.webm',
                '15ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_15ft_1000x400.webm',
                '30ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_30ft_1600x400.webm',
                '60ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_60ft_2800x400.webm',
                '90ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_90ft_4000x400.webm'
            },
        },
        Snipe: {
            blue: {
                '05ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_05ft_600x400.webm',
                '15ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_15ft_1000x400.webm',
                '30ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_30ft_1600x400.webm',
                '60ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_60ft_2800x400.webm',
                '90ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_90ft_4000x400.webm'
            },
        }
    },
    burning_hands: {
        _template: 'cone',
        '01': {
            orange: 'modules/JB2A_DnD5e/Library/1st_Level/Burning_Hands/BurningHands_01_Regular_Orange_600x600.webm',
        },
    },
    butterflies: {
        few: {
            orange: 'modules/JB2A_DnD5e/Library/Generic/Butterflies/Butterflies_01_Regular_Orange_Few_400x400.webm'
        },
        many: {
            orange: 'modules/JB2A_DnD5e/Library/Generic/Butterflies/Butterflies_01_Regular_Orange_Many_400x400.webm'
        },
        single: {
            orange: 'modules/JB2A_DnD5e/Library/Generic/Butterflies/Butterflies_01_Regular_Orange_Single_400x400.webm'
        }
    },
    call_lightning: {
        low_res: {
            blue: 'modules/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/CallLightning_01_Blue_1000x1000.webm',
            blueorange: 'modules/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/CallLightning_01_BlueOrange_1000x1000.webm',
            green: 'modules/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/CallLightning_01_Green_1000x1000.webm',
            pinkyellow: 'modules/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/CallLightning_01_PinkYellow_1000x1000.webm',
            purple: 'modules/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/CallLightning_01_Purple_1000x1000.webm',
            red: 'modules/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/CallLightning_01_Red_1000x1000.webm',
            yellow: 'modules/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/CallLightning_01_Yellow_1000x1000.webm',
        },
        high_res: {
            blue: 'modules/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/High_Res/CallLightning_01_Blue_2400x2400.webm',
            blueorange: 'modules/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/High_Res/CallLightning_01_BlueOrange_2400x2400.webm',
            purple: 'modules/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/High_Res/CallLightning_01_Purple_2400x2400.webm',
            red: 'modules/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/High_Res/CallLightning_01_Red_2400x2400.webm',
            yellow: 'modules/JB2A_DnD5e/Library/3rd_Level/Call_Lightning/High_Res/CallLightning_01_Yellow_2400x2400.webm',
        }
    },
    campfire: {
        '01': {
            orange: 'modules/JB2A_DnD5e/Library/Generic/Fire/Campfire/Campfire_01_Regular_Orange_200x200.webm',
        },
    },
    chain_lightning: {
        _template: 'ranged',
        primary: {
            blue: {
                '05ft': 'modules/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_05ft_Primary_600x400.webm',
                '15ft': 'modules/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_15ft_Primary_1000x400.webm',
                '30ft': 'modules/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_30ft_Primary_1600x400.webm',
                '60ft': 'modules/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_60ft_Primary_2800x400.webm',
                '90ft': 'modules/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_90ft_Primary_4000x400.webm'
            },
        },
        secondary: {
            blue: {
                '05ft': 'modules/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_05ft_Secondary_600x400.webm',
                '15ft': 'modules/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_15ft_Secondary_1000x400.webm',
                '30ft': 'modules/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_30ft_Secondary_1600x400.webm',
                '60ft': 'modules/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_60ft_Secondary_2800x400.webm',
                '90ft': 'modules/JB2A_DnD5e/Library/6th_Level/Chain_Lightning/ChainLightning_01_Regular_Blue_90ft_Secondary_4000x400.webm'
            },
        }
    },
    claws: {
        '200px': {
            red: 'modules/JB2A_DnD5e/Library/Generic/Creature/Claws_01_Regular_Red_200x200.webm'
        },
        '400px': {
            red: 'modules/JB2A_DnD5e/Library/Generic/Creature/Claws_01_Regular_Red_400x400.webm'
        }
    },
    cloud_of_daggers: {
        daggers: {
            blue: 'modules/JB2A_DnD5e/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Light_Blue_400x400.webm',
            green: 'modules/JB2A_DnD5e/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Light_Green_400x400.webm',
            orange: 'modules/JB2A_DnD5e/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Light_Orange_400x400.webm',
            purple: 'modules/JB2A_DnD5e/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Light_Purple_400x400.webm',
            red: 'modules/JB2A_DnD5e/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Light_Red_400x400.webm',
            yellow: 'modules/JB2A_DnD5e/Library/2nd_Level/Cloud_Of_Daggers/CloudOfDaggers_01_Light_Yellow_400x400.webm'
        },
    },
    club: {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Club01_01_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Club01_02_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Club01_03_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Club01_04_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Club01_05_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Club01_06_Regular_White_800x600.webm'
                ]
            }
        }
    },
    cone_of_cold: {
        _template: "cone",
        blue: 'modules/JB2A_DnD5e/Library/5th_Level/Cone_Of_Cold/ConeOfCold_01_Regular_Blue_600x600.webm',
    },
    cure_wounds: {
        '200px': {
            blue: 'modules/JB2A_DnD5e/Library/1st_Level/Cure_Wounds/CureWounds_01_Blue_200x200.webm',
        },
        '400px': {
            blue: 'modules/JB2A_DnD5e/Library/1st_Level/Cure_Wounds/CureWounds_01_Blue_400x400.webm',
        }
    },
    dagger: {
        melee: {
            _template: 'melee',
            '02': {
                white: 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Dagger02_01_Regular_White_800x600.webm',
            }
        },
        return: {
            _template: 'ranged',
            '01': {
                white: {
                    '15ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_15ft_1000x400.webm',
                    '30ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_30ft_1600x400.webm',
                    '60ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_60ft_2800x400.webm',
                    '90ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_90ft_4000x400.webm'
                }
            },
        },
        throw: {
            _template: 'ranged',
            '01': {
                white: {
                    '15ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_15ft_1000x400.webm',
                    '30ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_30ft_1600x400.webm',
                    '60ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_60ft_2800x400.webm',
                    '90ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/Dagger01_01_Regular_White_90ft_4000x400.webm'
                }
            },
        }
    },
    dancing_light: {
        blueteal: 'modules/JB2A_DnD5e/Library/Cantrip/Dancing_Lights/DancingLights_01_BlueTeal_200x200.webm',
        blueyellow: 'modules/JB2A_DnD5e/Library/Cantrip/Dancing_Lights/DancingLights_01_BlueYellow_200x200.webm',
        green: 'modules/JB2A_DnD5e/Library/Cantrip/Dancing_Lights/DancingLights_01_Green_200x200.webm',
        pink: 'modules/JB2A_DnD5e/Library/Cantrip/Dancing_Lights/DancingLights_01_Pink_200x200.webm',
        purplegreen: 'modules/JB2A_DnD5e/Library/Cantrip/Dancing_Lights/DancingLights_01_PurpleGreen_200x200.webm',
        red: 'modules/JB2A_DnD5e/Library/Cantrip/Dancing_Lights/DancingLights_01_Red_200x200.webm',
        yellow: 'modules/JB2A_DnD5e/Library/Cantrip/Dancing_Lights/DancingLights_01_Yellow_200x200.webm'
    },
    darkness: {
        black: 'modules/JB2A_DnD5e/Library/2nd_Level/Darkness/Darkness_01_Black_600x600.webm',
        green: 'modules/JB2A_DnD5e/Library/2nd_Level/Darkness/Darkness_01_Green_600x600.webm',
    },
    detect_magic: {
        circle: {
            blue: 'modules/JB2A_DnD5e/Library/1st_Level/Detect_Magic/DetectMagicCircle_01_Regular_Blue_1200x1200.webm',
        },
        _template: 'cone100',
        blue: {
            '05ft': 'modules/JB2A_DnD5e/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_Blue_05ft_300x300.webm',
            '15ft': 'modules/JB2A_DnD5e/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_Blue_15ft_500x500.webm',
            '30ft': 'modules/JB2A_DnD5e/Library/1st_Level/Detect_Magic/DetectMagicCone_01_Regular_Blue_30ft_800x800.webm'
        }
    },
    disintegrate: {
        _template: 'ranged',
        green: {
            '05ft': 'modules/JB2A_DnD5e/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Green01_05ft_600x400.webm',
            '15ft': 'modules/JB2A_DnD5e/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Green01_15ft_1000x400.webm',
            '30ft': 'modules/JB2A_DnD5e/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Green01_30ft_1600x400.webm',
            '60ft': 'modules/JB2A_DnD5e/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Green01_60ft_2800x400.webm',
            '90ft': 'modules/JB2A_DnD5e/Library/6th_Level/Disintegrate/Disintegrate_01_Regular_Green01_90ft_4000x400.webm'
        },
    },
    divine_smite: {
        caster: {
            blueyellow: 'modules/JB2A_DnD5e/Library/2nd_Level/Divine_Smite/DivineSmite_01_Regular_BlueYellow_Caster_400x400.webm'
        },
        target: {
            blueyellow: 'modules/JB2A_DnD5e/Library/2nd_Level/Divine_Smite/DivineSmite_01_Regular_BlueYellow_Target_400x400.webm'
        }
    },
    dizzy_stars: {
        '200px': {
            blueorange: 'modules/JB2A_DnD5e/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_BlueOrange_200x200.webm'
        },
        '400px': {
            blueorange: 'modules/JB2A_DnD5e/Library/Generic/Conditions/Dizzy_Stars/DizzyStars_01_BlueOrange_400x400.webm'
        }
    },
    eldritch_blast: {
        _template: 'ranged',
        purple: {
            '05ft': 'modules/JB2A_DnD5e/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Purple_05ft_600x400.webm',
            '15ft': 'modules/JB2A_DnD5e/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Purple_15ft_1000x400.webm',
            '30ft': 'modules/JB2A_DnD5e/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Purple_30ft_1600x400.webm',
            '60ft': 'modules/JB2A_DnD5e/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Purple_60ft_2800x400.webm',
            '90ft': 'modules/JB2A_DnD5e/Library/Cantrip/Eldritch_Blast/EldritchBlast_01_Regular_Purple_90ft_4000x400.webm'
        },
    },
    electric_arc: {
        '01': 'modules/JB2A_DnD5e/Library/Generic/Lightning/ElectricArc01_01_Regular_Blue_1600x500.webm',
        '02': 'modules/JB2A_DnD5e/Library/Generic/Lightning/ElectricArc02_01_Regular_Blue_1600x500.webm',
        '03': 'modules/JB2A_DnD5e/Library/Generic/Lightning/ElectricArc03_01_Regular_Blue_1600x500.webm',
        '04': 'modules/JB2A_DnD5e/Library/Generic/Lightning/ElectricArc04_01_Regular_Blue_1600x500.webm'
    },
    energy_beam: {
        _template: 'ranged',
        blue: {
            '15ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyBeam_01_Regular_Blue_15ft_1000x400.webm',
            '30ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyBeam_01_Regular_Blue_30ft_1600x400.webm',
            '60ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyBeam_01_Regular_Blue_60ft_2800x400.webm',
            '90ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyBeam_01_Regular_Blue_90ft_4000x400.webm'
        }
    },
    energy_field: {
        '01': {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyField_01_Regular_Blue_600x600.webm'
        },
        '02': {
            below: {
                blue: 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyFieldBot_02_Regular_Blue_400x400.webm'
            },
            above: {
                blue: 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyFieldTop_02_Regular_Blue_400x400.webm'
            }
        }
    },
    energy_strands: {
        complete: {
            blue: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Marker/EnergyStrands_01_Regular_Blue_600x600.webm'
            },
        },
        overlay: {
            blue: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Marker/EnergyStrandsOverlay_01_Regular_Blue_600x600.webm'
            },
        },
        range: {
            _template: 'ranged',
            standard: {
                purple: {
                    '01': {
                        '05ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_01_Regular_Purple_05ft_600x400.webm',
                        '15ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_01_Regular_Purple_15ft_1000x400.webm',
                        '30ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_01_Regular_Purple_30ft_1600x400.webm',
                        '60ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_01_Regular_Purple_60ft_2800x400.webm',
                        '90ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_01_Regular_Purple_90ft_4000x400.webm',
                    },
                    '02': {
                        '05ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_02_Regular_Purple_05ft_600x400.webm',
                        '15ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_02_Regular_Purple_15ft_1000x400.webm',
                        '30ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_02_Regular_Purple_30ft_1600x400.webm',
                        '60ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_02_Regular_Purple_60ft_2800x400.webm',
                        '90ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_02_Regular_Purple_90ft_4000x400.webm'
                    },
                    '03': {
                        '05ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_03_Regular_Purple_05ft_600x400.webm',
                        '15ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_03_Regular_Purple_15ft_1000x400.webm',
                        '30ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_03_Regular_Purple_30ft_1600x400.webm',
                        '60ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_03_Regular_Purple_60ft_2800x400.webm',
                        '90ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_03_Regular_Purple_90ft_4000x400.webm'
                    },
                    '04': {
                        '05ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_04_Regular_Purple_05ft_600x400.webm',
                        '15ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_04_Regular_Purple_15ft_1000x400.webm',
                        '30ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_04_Regular_Purple_30ft_1600x400.webm',
                        '60ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_04_Regular_Purple_60ft_2800x400.webm',
                        '90ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_04_Regular_Purple_90ft_4000x400.webm'
                    }
                }
            },
            multiple: {
                dark_purple: {
                    '05ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Purple_05ft_600x400.webm',
                    '15ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Purple_15ft_1000x400.webm',
                    '30ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Purple_30ft_1600x400.webm',
                    '60ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Purple_60ft_2800x400.webm',
                    '90ft': 'modules/JB2A_DnD5e/Library/Generic/Energy/EnergyStrand_Multiple01_Regular_Purple_90ft_4000x400.webm'
                },
            }
        }
    },
    entangle: {
        brown: 'modules/JB2A_DnD5e/Library/1st_Level/Entangle/Entangle_01_Brown_400x400.webm',
        green: 'modules/JB2A_DnD5e/Library/1st_Level/Entangle/Entangle_01_Green_400x400.webm',
        yellow: 'modules/JB2A_DnD5e/Library/1st_Level/Entangle/Entangle_01_Yellow_400x400.webm'
    },
    explosion: {
        '01': {
            orange: 'modules/JB2A_DnD5e/Library/Generic/Explosion/Explosion_01_Orange_400x400.webm'
        },
        '02': {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Explosion/Explosion_02_Blue_400x400.webm'
        },
        '03': {
            blueyellow: 'modules/JB2A_DnD5e/Library/Generic/Explosion/Explosion_03_Regular_BlueYellow_400x400.webm'
        },
        '04': {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Explosion/Explosion_04_Regular_Blue_400x400.webm'
        },
        blue: [
            'modules/JB2A_DnD5e/Library/Generic/Explosion/Explosion_02_Blue_400x400.webm',
            'modules/JB2A_DnD5e/Library/Generic/Explosion/Explosion_04_Regular_Blue_400x400.webm'
        ]
    },
    extras: {
        tmfx: {
            border: {
                circle: {
                    inpulse: {
                        '01': {
                            normal: "modules/JB2A_DnD5e/Library/TMFX/Border/Circle/BorderInPulse_01_Circle_Normal_500.webm"
                        },
                        '02': {
                            normal: "modules/JB2A_DnD5e/Library/TMFX/Border/Circle/BorderInPulse_02_Circle_Normal_500.webm"
                        }
                    },
                    outpulse: {
                        '01': {
                            normal: "modules/JB2A_DnD5e/Library/TMFX/Border/Circle/BorderOutPulse_01_Circle_Normal_500.webm"
                        },
                        '02': {
                            normal: "modules/JB2A_DnD5e/Library/TMFX/Border/Circle/BorderOutPulse_02_Circle_Normal_500.webm"
                        }
                    },
                    simple: {
                        '01': "modules/JB2A_DnD5e/Library/TMFX/Border/Circle/BorderSimple_01_Circle_Normal_500.webm",
                        '02': "modules/JB2A_DnD5e/Library/TMFX/Border/Circle/BorderSimple_02_Circle_Normal_500.webm",
                        '03': "modules/JB2A_DnD5e/Library/TMFX/Border/Circle/BorderSimple_03_Circle_Normal_500.webm",
                        '04': "modules/JB2A_DnD5e/Library/TMFX/Border/Circle/BorderSimple_04_Circle_Normal_500.webm"
                    }
                }
            },
            inflow: {
                circle: {
                    '01': "modules/JB2A_DnD5e/Library/TMFX/InFlow/Circle/InFlow_01_Circle_500x500.webm"
                }
            },
            inpulse: {
                circle: {
                    '01': {
                        normal: "modules/JB2A_DnD5e/Library/TMFX/InPulse/Circle/InPulse_01_Circle_Normal_500.webm"
                    },
                    '02': {
                        normal: "modules/JB2A_DnD5e/Library/TMFX/InPulse/Circle/InPulse_02_Circle_Normal_500.webm"
                    },
                    '03': {
                        normal: "modules/JB2A_DnD5e/Library/TMFX/InPulse/Circle/InPulse_03_Circle_Normal_500.webm"
                    },
                    '04': {
                        normal: "modules/JB2A_DnD5e/Library/TMFX/InPulse/Circle/InPulse_04_Circle_Normal_500.webm"
                    }
                }
            },
            outflow: {
                circle: {
                    '01': "modules/JB2A_DnD5e/Library/TMFX/OutFlow/Circle/OutFlow_01_Circle_500x500.webm",
                },
            },
            outpulse: {
                circle: {
                    '01': {
                        normal: "modules/JB2A_DnD5e/Library/TMFX/OutPulse/Circle/OutPulse_01_Circle_Normal_500.webm",
                    },
                    '02': {
                        normal: "modules/JB2A_DnD5e/Library/TMFX/OutPulse/Circle/OutPulse_02_Circle_Normal_500.webm",
                    },
                    '03': {
                        normal: "modules/JB2A_DnD5e/Library/TMFX/OutPulse/Circle/OutPulse_03_Circle_Normal_500.webm",
                    },
                    '04': {
                        normal: "modules/JB2A_DnD5e/Library/TMFX/OutPulse/Circle/OutPulse_04_Circle_Normal_500.webm",
                    }
                },
                cone: {
                    '01': {
                        normal: "modules/JB2A_DnD5e/Library/TMFX/OutPulse/Cone/OutPulse_01_Cone_Normal_500.webm"
                    },
                    '02': {
                        normal: "modules/JB2A_DnD5e/Library/TMFX/OutPulse/Cone/OutPulse_02_Cone_Normal_500.webm"
                    },
                    '03': {
                        normal: "modules/JB2A_DnD5e/Library/TMFX/OutPulse/Cone/OutPulse_03_Cone_Normal_500.webm"
                    },
                    '04': {
                        normal: "modules/JB2A_DnD5e/Library/TMFX/OutPulse/Cone/OutPulse_04_Cone_Normal_500.webm"
                    }
                },
                line: {
                    '01': {
                        normal: "modules/JB2A_DnD5e/Library/TMFX/OutPulse/Line/OutPulse_01_Line_Normal_500.webm"
                    },
                    '02': {
                        normal: "modules/JB2A_DnD5e/Library/TMFX/OutPulse/Line/OutPulse_02_Line_Normal_500.webm"
                    },
                    '03': {
                        normal: "modules/JB2A_DnD5e/Library/TMFX/OutPulse/Line/OutPulse_03_Line_Normal_500.webm"
                    },
                    '04': {
                        normal: "modules/JB2A_DnD5e/Library/TMFX/OutPulse/Line/OutPulse_04_Line_Normal_500.webm"
                    }
                }
            },
            radar: {
                circle: {
                    loop: {
                        '01': {
                            normal: "modules/JB2A_DnD5e/Library/TMFX/Radar/Circle/RadarLoop_01_Circle_Normal_500x500.webm"
                        }
                    },
                    pulse: {
                        '01': {
                            normal: "modules/JB2A_DnD5e/Library/TMFX/Radar/Circle/RadarPulse_01_Circle_Normal_500x500.webm",
                        }
                    }
                }
            },
            runes: {
                circle: {
                    simple: {
                        abjuration: "modules/JB2A_DnD5e/Library/TMFX/Runes/Circle/AbjurationSimple_01_Circle_Normal_500.webm",
                        conjuration: "modules/JB2A_DnD5e/Library/TMFX/Runes/Circle/ConjurationSimple_01_Circle_Normal_500.webm",
                        divination: "modules/JB2A_DnD5e/Library/TMFX/Runes/Circle/DivinationSimple_01_Circle_Normal_500.webm",
                        enchantment: "modules/JB2A_DnD5e/Library/TMFX/Runes/Circle/EnchantmentSimple_01_Circle_Normal_500.webm",
                        evocation: "modules/JB2A_DnD5e/Library/TMFX/Runes/Circle/EvocationSimple_01_Circle_Normal_500.webm",
                        illusion: "modules/JB2A_DnD5e/Library/TMFX/Runes/Circle/IllusionSimple_01_Circle_Normal_500.webm",
                        necromancy: "modules/JB2A_DnD5e/Library/TMFX/Runes/Circle/NecromancySimple_01_Circle_Normal_500.webm",
                        transmutation: "modules/JB2A_DnD5e/Library/TMFX/Runes/Circle/TransmutationSimple_01_Circle_Normal_500.webm"
                    }
                }
            }
        }
    },
    falchion: {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Falchion01_01_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Falchion01_02_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Falchion01_03_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Falchion01_04_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Falchion01_05_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Falchion01_06_Regular_White_800x600.webm'
                ]
            }
        }
    },
    falling_rocks: {
        endframe: {
            side: {
                '1x1': {
                    grey: [
                        'modules/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Grey_05x05ft_Endframe.webp',
                        'modules/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Grey_05x05ft_Endframe.webp'
                    ]
                },
                '2x1': {
                    grey: [
                        'modules/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Grey_10x05ft_Endframe.webp',
                        'modules/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Grey_10x05ft_Endframe.webp'
                    ]
                }
            },
            top: {
                '1x1': {
                    grey: [
                        'modules/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Grey_05x05ft_Endframe.webp',
                        'modules/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Grey_05x05ft_Endframe.webp'
                    ]
                },
                '2x1': {
                    grey: [
                        'modules/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Grey_10x05ft_Endframe.webp',
                        'modules/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Grey_10x05ft_Endframe.webp'
                    ]
                }
            }
        },
        side: {
            '1x1': {
                grey: [
                    'modules/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Grey_05x05ft_600x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Grey_05x05ft_600x600.webm'
                ]
            },
            '2x1': {
                grey: [
                    'modules/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_01_Regular_Grey_10x05ft_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Side_02_Regular_Grey_10x05ft_800x600.webm'
                ]
            }
        },
        top: {
            '1x1': {
                grey: [
                    'modules/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Grey_05x05ft_600x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Grey_05x05ft_600x600.webm'
                ]
            },
            '2x1': {
                grey: [
                    'modules/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_01_Regular_Grey_10x05ft_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Traps/Falling_Rocks/FallingRocks01Top_02_Regular_Grey_10x05ft_800x600.webm'
                ]
            }
        }
    },
    fireball: {
        loop_debris: {
            orange: 'modules/JB2A_DnD5e/Library/3rd_Level/Fireball/FireballLoop_01_Orange_800x800.webm',
        },
        loop_no_debris: {
            orange: 'modules/JB2A_DnD5e/Library/3rd_Level/Fireball/FireballLoopNoDebris_01_Orange_800x800.webm',
        },
        explosion: {
            orange: 'modules/JB2A_DnD5e/Library/3rd_Level/Fireball/FireballExplosion_01_Orange_800x800.webm',
        },
        beam: {
            _template: 'ranged',
            orange: {
                '05ft': 'modules/JB2A_DnD5e/Library/3rd_Level/Fireball/FireballBeam_01_Orange_05ft_600x400.webm',
                '15ft': 'modules/JB2A_DnD5e/Library/3rd_Level/Fireball/FireballBeam_01_Orange_15ft_1000x400.webm',
                '30ft': 'modules/JB2A_DnD5e/Library/3rd_Level/Fireball/FireballBeam_01_Orange_30ft_1600x400.webm',
                '60ft': 'modules/JB2A_DnD5e/Library/3rd_Level/Fireball/FireballBeam_01_Orange_60ft_2800x400.webm',
                '90ft': 'modules/JB2A_DnD5e/Library/3rd_Level/Fireball/FireballBeam_01_Orange_90ft_4000x400.webm'
            },
        }

    },
    fire_bolt: {
        _template: 'ranged',
        orange: {
            '05ft': 'modules/JB2A_DnD5e/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Orange_05ft_600x400.webm',
            '15ft': 'modules/JB2A_DnD5e/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Orange_15ft_1000x400.webm',
            '30ft': 'modules/JB2A_DnD5e/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Orange_30ft_1600x400.webm',
            '60ft': 'modules/JB2A_DnD5e/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Orange_60ft_2800x400.webm',
            '90ft': 'modules/JB2A_DnD5e/Library/Cantrip/Fire_Bolt/FireBolt_01_Regular_Orange_90ft_4000x400.webm'
        },
    },
    fireflies: {
        few: {
            '01': {
                green: 'modules/JB2A_DnD5e/Library/Generic/Fireflies/Fireflies_01_Green_Few01_400x400.webm'
            },
            '02': {
                green: 'modules/JB2A_DnD5e/Library/Generic/Fireflies/Fireflies_01_Green_Few02_400x400.webm',
            }
        },
        many: {
            '01': {
                green: 'modules/JB2A_DnD5e/Library/Generic/Fireflies/Fireflies_01_Green_Many01_400x400.webm',
            },
            '02': {
                green: 'modules/JB2A_DnD5e/Library/Generic/Fireflies/Fireflies_01_Green_Many02_400x400.webm',
            }
        }
    },
    fire_jet: {
        orange: {
            '15ft': 'modules/JB2A_DnD5e/Library/Generic/Fire/FireJet_01_Orange_15ft_600x200.webm',
            '30ft': 'modules/JB2A_DnD5e/Library/Generic/Fire/FireJet_01_Orange_30ft_1200x200.webm'
        }
    },
    fire_ring: {
        '500px': {
            red: 'modules/JB2A_DnD5e/Library/Generic/Fire/FireRing_01_Circle_Red_500.webm'
        },
        '900px': {
            red: 'modules/JB2A_DnD5e/Library/Generic/Fire/FireRing_01_Circle_Red_900.webm'
        }
    },
    firework: {
        '01': {
            orangeyellow: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Fireworks/Firework01_01_Regular_OrangeYellow_600x600.webm',
                '03': 'modules/JB2A_DnD5e/Library/Generic/Fireworks/Firework03_01_Regular_OrangeYellow_600x600.webm'
            },
            yellow: {
                '02': 'modules/JB2A_DnD5e/Library/Generic/Fireworks/Firework02_01_Regular_Yellow_600x600.webm'
            }
        },
        '02': {
            orangeyellow: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Fireworks/Firework01_02_Regular_OrangeYellow_600x600.webm',
                '03': 'modules/JB2A_DnD5e/Library/Generic/Fireworks/Firework03_02_Regular_OrangeYellow_600x600.webm'
            },
            yellow: {
                '02': 'modules/JB2A_DnD5e/Library/Generic/Fireworks/Firework02_02_Regular_Yellow_600x600.webm'
            }
        }
    },
    flames: {
        '01': {
            orange: 'modules/JB2A_DnD5e/Library/Generic/Fire/Flame/Flames_01_Regular_Orange_200x200.webm'
        },
        '02': {
            orange: 'modules/JB2A_DnD5e/Library/Generic/Fire/Flame/Flames_02_Regular_Orange_400x400.webm'
        }
    },
    flaming_sphere: {
        //TO BE REMOVED [-->
        blue: 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Blue_200x200.webm',
        green: 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Green_200x200.webm',
        greenblue: 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/Multicoloured/FlamingSphere_01_GreenToBlue_200x200.webm',
        orange: {
            '01': 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Orange_200x200.webm',
            '02': 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_02_Orange_200x200.webm'
        },
        pink: 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Pink_200x200.webm',
        purple: 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Purple_200x200.webm',
        rainbow: 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/Multicoloured/FlamingSphere_01_Rainbow_200x200.webm',
        red: 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Red_200x200.webm',
        //TO BE REMOVED <--]
        '200px': {
            blue: 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Blue_200x200.webm',
            green: 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Green_200x200.webm',
            greenblue: 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/Multicoloured/FlamingSphere_01_GreenToBlue_200x200.webm',
            orange: {
                '01': 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Orange_200x200.webm',
                '02': 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_02_Orange_200x200.webm'
            },
            pink: 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Pink_200x200.webm',
            purple: 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Purple_200x200.webm',
            rainbow: 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/Multicoloured/FlamingSphere_01_Rainbow_200x200.webm',
            red: 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_01_Red_200x200.webm'
        },
        '400px': {
            orange: {
                '02': 'modules/JB2A_DnD5e/Library/2nd_Level/Flaming_Sphere/FlamingSphere_02_Orange_400x400.webm'
            }
        }
    },
    flurry_of_blows: {
        _template: 'melee',
        magical: {
            '01': {
                blue: 'modules/JB2A_DnD5e/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Magical01_800x600.webm'
            },
            '02': {
                blue: 'modules/JB2A_DnD5e/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Magical02_800x600.webm'
            }
        },
        physical: {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Physical01_800x600.webm'
        }
    },
    fog_cloud: {
        white: "modules/JB2A_DnD5e/Library/1st_Level/Fog_Cloud/FogCloud_01_White_800x800.webm",
    },
    footprints: {
        shoe: {
            black: 'modules/JB2A_DnD5e/Library/Generic/FootPrint/ShoePrint_01_Black_200x200.webm',
            grey: 'modules/JB2A_DnD5e/Library/Generic/FootPrint/ShoePrint_01_Grey_200x200.webm'
        }
    },
    fumes: {
        steam: {
            white: "modules/JB2A_DnD5e/Library/Generic/Smoke/Fumes_02_Steam_White_400x400.webm"
        }
    },
    glaive: {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Glaive01_01_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Glaive01_02_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Glaive01_03_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Glaive01_04_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Glaive01_05_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Glaive01_06_Regular_White_800x600.webm'
                ]
            }
        }
    },
    grease: {
        _template: 'large',
        dark_brown: {
            loop: 'modules/JB2A_DnD5e/Library/1st_Level/Grease/Grease_Dark_Brown_600x600.webm'
        }

    },
    greataxe: {
        melee: {
            _template: 'melee',
            white: 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/GreatAxe01_01_Regular_White_800x600.webm'
        }
    },
    greatclub: {
        _template: 'melee',
        white: 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/GreatClub01_01_Regular_White_800x600.webm'
    },
    greatsword: {
        melee: {
            _template: 'melee',
            white: 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/GreatSword01_01_Regular_White_800x600.webm'
        }
    },
    ground_cracks: {
        orange: {
            '01': 'modules/JB2A_DnD5e/Library/Generic/Fire/GroundCrackLoop_01_Regular_Orange_600x600.webm',
            '02': 'modules/JB2A_DnD5e/Library/Generic/Fire/GroundCrackLoop_02_Regular_Orange_600x600.webm',
            '03': 'modules/JB2A_DnD5e/Library/Generic/Fire/GroundCrackLoop_03_Regular_Orange_600x600.webm'
        },
        '01': {
            orange: 'modules/JB2A_DnD5e/Library/Generic/Fire/GroundCrackLoop_01_Regular_Orange_600x600.webm'
        },
        '02': {
            orange: 'modules/JB2A_DnD5e/Library/Generic/Fire/GroundCrackLoop_02_Regular_Orange_600x600.webm'
        },
        '03': {
            orange: 'modules/JB2A_DnD5e/Library/Generic/Fire/GroundCrackLoop_03_Regular_Orange_600x600.webm'
        }
    },
    guiding_bolt: {
        _template: 'ranged',
        '01': {
            blueyellow: {
                '05ft': 'modules/JB2A_DnD5e/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_05ft_600x400.webm',
                '15ft': 'modules/JB2A_DnD5e/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_15ft_1000x400.webm',
                '30ft': 'modules/JB2A_DnD5e/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_30ft_1600x400.webm',
                '60ft': 'modules/JB2A_DnD5e/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_60ft_2800x400.webm',
                '90ft': 'modules/JB2A_DnD5e/Library/1st_Level/Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_90ft_4000x400.webm'
            }
        },
    },
    gust_of_wind: {
        _template: 'ray',
        default: 'modules/JB2A_DnD5e/Library/2nd_Level/Gust_Of_Wind/GustOfWind_01_White_1200x200.webm',
        veryfast: 'modules/JB2A_DnD5e/Library/2nd_Level/Gust_Of_Wind/GustOfWind_01_White_VeryFast_1200x200.webm'
    },
    halberd: {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Halberd01_01_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Halberd01_02_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Halberd01_03_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Halberd01_04_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Halberd01_05_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Halberd01_06_Regular_White_800x600.webm'
                ]
            }
        }
    },
    hammer: {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Hammer01_01_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Hammer01_02_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Hammer01_03_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Hammer01_04_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Hammer01_05_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Hammer01_06_Regular_White_800x600.webm'
                ]
            }
        }
    },
    handaxe: {
        melee: {
            _template: 'melee',
            white: 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/HandAxe02_01_Regular_White_800x600.webm'
        }
    },
    healing_generic: {
        '200px': {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_01_Blue_200x200.webm',
            green: 'modules/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_01_Green_200x200.webm',
            purple: 'modules/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_01_Purple_200x200.webm',
            yellow: 'modules/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_01_Yellow_200x200.webm'
        },
        '400px': {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_01_Blue_400x400.webm',
            green: 'modules/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_01_Green_400x400.webm',
            purple: 'modules/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_01_Purple_400x400.webm',
            yellow: 'modules/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_01_Yellow_400x400.webm'
        },
        burst: {
            greenorange: 'modules/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_02_Regular_GreenOrange_Burst_600x600.webm'
        },
        loop: {
            greenorange: 'modules/JB2A_DnD5e/Library/Generic/Healing/HealingAbility_02_Regular_GreenOrange_Loop_600x600.webm'
        }
    },
    hunters_mark: {
        loop: {
            '01': {
                green: 'modules/JB2A_DnD5e/Library/1st_Level/Hunters_Mark/HuntersMark_01_Regular_Green_Loop_200x200.webm'
            }
        },
        pulse: {
            '01': {
                green: 'modules/JB2A_DnD5e/Library/1st_Level/Hunters_Mark/HuntersMark_01_Regular_Green_Pulse_200x200.webm'
            }
        }
    },
    ice_spikes: {
        radial: {
            burst: {
                white: "modules/JB2A_DnD5e/Library/Generic/Ice/IceSpikesRadialBurst_01_Regular_White_1000x1000.webm"
            },
            loop: {
                white: "modules/JB2A_DnD5e/Library/Generic/Ice/IceSpikesRadialLoop_01_Regular_White_1000x1000.webm"
            }
        },
        wall: {
            burst: {
                white: "modules/JB2A_DnD5e/Library/Generic/Ice/IceSpikesWallBurst_01_Regular_White_600x1000.webm"
            },
            loop: {
                white: "modules/JB2A_DnD5e/Library/Generic/Ice/IceSpikesWallLoop_01_Regular_White_600x1000.webm"
            }
        }
    },
    icon: {
        drop: {
            red: 'modules/JB2A_DnD5e/Library/Generic/UI/IconDrop_01_Regular_Red_200x200.webm'

        },
        fear: {
            dark_purple: 'modules/JB2A_DnD5e/Library/Generic/UI/IconFear_01_Dark_Purple_200x200.webm'

        },
        heart: {
            pink: 'modules/JB2A_DnD5e/Library/Generic/UI/IconHeart_01_Regular_Pink_200x200.webm'

        },
        horror: {
            purple: 'modules/JB2A_DnD5e/Library/Generic/UI/IconHorror_01_Regular_Purple_200x200.webm'

        },
        music_note: {
            blue: 'modules/JB2A_DnD5e/Library/Generic/UI/IconMusicNote_01_Regular_Blue_200x200.webm'
        },
        poison: {
            dark_green: 'modules/JB2A_DnD5e/Library/Generic/UI/IconPoison_01_Dark_Green_200x200.webm'

        },
        runes: {
            orange: 'modules/JB2A_DnD5e/Library/Generic/UI/IconRunes_01_Regular_Orange_200x200.webm'

        },
        shield: {
            green: 'modules/JB2A_DnD5e/Library/Generic/UI/IconShield_01_Regular_Green_200x200.webm'

        },
        shield_cracked: {
            purple: 'modules/JB2A_DnD5e/Library/Generic/UI/IconShieldCracked_01_Regular_Purple_200x200.webm'

        },
        skull: {
            purple: 'modules/JB2A_DnD5e/Library/Generic/UI/IconSkull_01_Regular_Purple_200x200.webm'

        },
        snowflake: {
            blue: 'modules/JB2A_DnD5e/Library/Generic/UI/IconSnowflake_01_Regular_Blue_200x200.webm'

        },
        stun: {
            purple: 'modules/JB2A_DnD5e/Library/Generic/UI/IconStun_01_Regular_Purple_200x200.webm'

        }
    },
    icosahedron: {
        simple: {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Energy/Icosahedron_01_Regular_Blue_600x600.webm'
        },
        roll: {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Energy/IcosahedronRoll_01_Regular_Blue_600x600.webm'
        },
        rune: {
            above: {
                blueyellow: 'modules/JB2A_DnD5e/Library/Generic/Energy/IcosahedronRuneAbove_01_Regular_BlueYellow_600x600.webm'
            },
            below: {

                blueyellow: 'modules/JB2A_DnD5e/Library/Generic/Energy/IcosahedronRuneBelow_01_Regular_BlueYellow_600x600.webm'
            }
        },
        star: {
            above: {
                blueyellow: 'modules/JB2A_DnD5e/Library/Generic/Energy/IcosahedronStarAbove_01_Regular_BlueYellow_600x600.webm'
            },
            below: {
                blueyellow: 'modules/JB2A_DnD5e/Library/Generic/Energy/IcosahedronStarBelow_01_Regular_BlueYellow_600x600.webm'
            }
        }
    },
    impact: {
        '001': {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_01_Regular_Blue_400x400.webm'
        },
        '002': {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_02_Regular_Blue_400x400.webm'
        },
        '003': {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_03_Regular_Blue_400x400.webm'
        },
        '004': {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_04_Regular_Blue_400x400.webm'
        },
        '005': {
            orange: 'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_05_Regular_Orange_400x400.webm'
        },
        '006': {
            yellow: 'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_06_Regular_Yellow_400x400.webm'
        },
        '007': {
            orange: 'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_07_Regular_Orange_400x400.webm',
            yellow: 'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_07_Regular_Yellow_400x400.webm'
        },
        '008': {
            orange: 'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_08_Regular_Orange_400x400.webm'
        },
        '009': {
            orange: 'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_09_Regular_Orange_400x400.webm'
        },
        '010': {
            orange: 'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_10_Regular_Orange_400x400.webm'
        },
        '011': {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_11_Regular_Blue_400x400.webm'
        },
        '012': {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_12_Regular_Blue_400x400.webm'
        },
        blue: [
            'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_01_Regular_Blue_400x400.webm',
            'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_02_Regular_Blue_400x400.webm',
            'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_03_Regular_Blue_400x400.webm',
            'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_04_Regular_Blue_400x400.webm',
            'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_11_Regular_Blue_400x400.webm',
            'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_12_Regular_Blue_400x400.webm'
        ],
        ground_crack: {
            '01': {
                orange: 'modules/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_01_Regular_Orange_600x600.webm',
            },
            '02': {
                orange: 'modules/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_02_Regular_Orange_600x600.webm',
            },
            '03': {
                orange: 'modules/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_03_Regular_Orange_600x600.webm',
            },
            still_frame: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_01_StillFrame.webp',
                '02': 'modules/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_02_StillFrame.webp',
                '03': 'modules/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_03_StillFrame.webp'
            }
        },
        orange: [
            'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_05_Regular_Orange_400x400.webm',
            'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_07_Regular_Orange_400x400.webm',
            'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_08_Regular_Orange_400x400.webm',
            'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_09_Regular_Orange_400x400.webm',
            'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_10_Regular_Orange_400x400.webm',
            'modules/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_01_Regular_Orange_600x600.webm',
            'modules/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_02_Regular_Orange_600x600.webm',
            'modules/JB2A_DnD5e/Library/Generic/Impact/GroundCrackImpact_03_Regular_Orange_600x600.webm',
        ],
        yellow: [
            'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_06_Regular_Yellow_400x400.webm',
            'modules/JB2A_DnD5e/Library/Generic/Impact/Impact_07_Regular_Yellow_400x400.webm'
        ]
    },
    impact_themed:{
        ice_shard: {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Impact/ImpactIceShard01_01_Regular_Blue_400x400.webm'
        }
    },
    ioun_stones: {
        '01': {
            blue: {
                awareness: "modules/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Awarness_Blue_200x200.webm",
                insight: "modules/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Insight_Blue_200x200.webm",
                strength: "modules/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Strength_Blue_200x200.webm"
            },
            green: {
                mastery: "modules/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Mastery_Green_200x200.webm"
            },
            pink: {
                fortitude: "modules/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Fortitude_Pink_200x200.webm",
                leadership: "modules/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Leadership_Pink_200x200.webm",
                protection: "modules/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Protection_Pink_200x200.webm"
            },
            purple: {
                absorption: "modules/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Absorption_Purple_200x200.webm",
                great_absorption: "modules/JB2A_DnD5e/Library/Generic/Item/IounStone_01_GreatAbsorption_Purple_200x200.webm",
                reserve: "modules/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Reserve_Purple_200x200.webm"
            },
            red: {
                agility: "modules/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Agility_Red_200x200.webm",
                intellect: "modules/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Intellect_Red_200x200.webm"
            },
            white: {
                regeneration: "modules/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Regeneration_White_200x200.webm",
                sustenance: "modules/JB2A_DnD5e/Library/Generic/Item/IounStone_01_Sustenance_White_200x200.webm"
            }
        }
    },

    lasershot: {
        _template: 'ranged',
        blue: {
            '05ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_05ft_600x400.webm',
            '15ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_15ft_1000x400.webm',
            '30ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_30ft_1600x400.webm',
            '60ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_60ft_2800x400.webm',
            '90ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_90ft_4000x400.webm'
        },
        green: {
            '05ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_05ft_600x400.webm',
            '15ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_15ft_1000x400.webm',
            '30ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_30ft_1600x400.webm',
            '60ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_60ft_2800x400.webm',
            '90ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_90ft_4000x400.webm'
        },
        orange: {
            '05ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_05ft_600x400.webm',
            '15ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_15ft_1000x400.webm',
            '30ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_30ft_1600x400.webm',
            '60ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_60ft_2800x400.webm',
            '90ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_90ft_4000x400.webm'
        },
        red: {
            '05ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_05ft_600x400.webm',
            '15ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_15ft_1000x400.webm',
            '30ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_30ft_1600x400.webm',
            '60ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_60ft_2800x400.webm',
            '90ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_90ft_4000x400.webm'
        }
    },
    lasersword: {
        melee: {
            _template: 'melee',
            blue: 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/LaserSword01_01_Regular_Blue_800x600.webm'
        },
        throw: {
            _template: 'ranged',
            blue: {
                '15ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_15ft_1000x600.webm',
                '30ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_30ft_1600x600.webm',
                '60ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_60ft_2800x600.webm',
                '90ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_90ft_4000x600.webm'
            }
        }
    },
    lasersword_db: {
        throw: {
            _template: 'ranged',
            red: {
                '15ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_15ft_1000x600.webm',
                '30ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_30ft_1600x600.webm',
                '60ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_60ft_2800x600.webm',
                '90ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_90ft_4000x600.webm'
            }
        }
    },
    lightning_ball: {
        blue: 'modules/JB2A_DnD5e/Library/Generic/Lightning/LightningBall_01_Regular_Blue_400x400.webm',
    },
    lightning_bolt: {
        _template: 'ray',
        narrow: {
            blue: 'modules/JB2A_DnD5e/Library/3rd_Level/Lightning_Bolt/LightningBolt_01_Regular_Blue_4000x200.webm'
        },
        wide: {
            blue: 'modules/JB2A_DnD5e/Library/3rd_Level/Lightning_Bolt/LightningBolt_01_Regular_Blue_4000x400.webm'
        }
    },
    lightning_strike: {
        '01': "modules/JB2A_DnD5e/Library/Generic/Lightning/LightningStrike_01a_800x800.webm",
        '02': "modules/JB2A_DnD5e/Library/Generic/Lightning/LightningStrike_01b_800x800.webm",
    },
    mace: {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Mace01_01_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Mace01_02_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Mace01_03_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Mace01_04_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Mace01_05_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Mace01_06_Regular_White_800x600.webm'
                ]
            }
        }
    },
    magic_missile: {
        _template: 'ranged',
        purple: {
            '05ft': [
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_05ft_01_600x400.webm',
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_05ft_02_600x400.webm',
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_05ft_03_600x400.webm',
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_05ft_04_600x400.webm'
            ],
            '15ft': [
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_15ft_01_1000x400.webm',
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_15ft_02_1000x400.webm',
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_15ft_03_1000x400.webm',
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_15ft_04_1000x400.webm'
            ],
            '30ft': [
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_30ft_01_1600x400.webm',
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_30ft_02_1600x400.webm',
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_30ft_03_1600x400.webm',
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_30ft_04_1600x400.webm'
            ],
            '60ft': [
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_60ft_01_2800x400.webm',
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_60ft_02_2800x400.webm',
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_60ft_03_2800x400.webm',
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_60ft_04_2800x400.webm'
            ],
            '90ft': [
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_90ft_01_4000x400.webm',
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_90ft_02_4000x400.webm',
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_90ft_03_4000x400.webm',
                'modules/JB2A_DnD5e/Library/1st_Level/Magic_Missile/MagicMissile_01_Regular_Purple_90ft_04_4000x400.webm'
            ]
        }
    },
    magic_signs: {
        circle: {
            '01': {
                abjuration: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Abjuration_01_Blue_Circle_800x800.webm',
                conjuration: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Conjuration_01_Yellow_Circle_800x800.webm',
                divination: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Divination_01_Light_Blue_Circle_800x800.webm',
            },
            '02': {
                abjuration: {
                    intro: {
                        blue: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/AbjurationCircleIntro_02_Regular_Blue_800x800.webm',
                    },
                    loop: {
                        blue: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/AbjurationCircleLoop_02_Regular_Blue_800x800.webm',
                    },
                    outro: {
                        blue: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/AbjurationCircleOutro_02_Regular_Blue_800x800.webm'
                    }
                },
                conjuration: {
                    intro: {
                        yellow: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/ConjurationCircleIntro_02_Regular_Yellow_800x800.webm',
                    },
                    loop: {
                        yellow: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/ConjurationCircleLoop_02_Regular_Yellow_800x800.webm',
                    },
                    outro: {
                        yellow: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/ConjurationCircleOutro_02_Regular_Yellow_800x800.webm'
                    }
                },
                divination: {
                    intro: {
                        blue: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/DivinationCircleIntro_02_Regular_Blue_800x800.webm',
                    },
                    loop: {
                        blue: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/DivinationCircleLoop_02_Regular_Blue_800x800.webm',
                    },
                    outro: {
                        blue: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/DivinationCircleOutro_02_Regular_Blue_800x800.webm'
                    }
                },
                enchantment: {
                    intro: {
                        pink: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/EnchantmentCircleIntro_02_Regular_Pink_800x800.webm',
                    },
                    loop: {
                        pink: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/EnchantmentCircleLoop_02_Regular_Pink_800x800.webm',
                    },
                    outro: {
                        pink: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/EnchantmentCircleOutro_02_Regular_Pink_800x800.webm'
                    }
                },
                evocation: {
                    intro: {
                        red: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/EvocationCircleIntro_02_Regular_Red_800x800.webm',
                    },
                    loop: {
                        red: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/EvocationCircleLoop_02_Regular_Red_800x800.webm',
                    },
                    outro: {
                        red: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/EvocationCircleOutro_02_Regular_Red_800x800.webm'
                    }
                },
                illusion: {
                    intro: {
                        purple: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/IllusionCircleIntro_02_Regular_Purple_800x800.webm',
                    },
                    loop: {
                        purple: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/IllusionCircleLoop_02_Regular_Purple_800x800.webm',
                    },
                    outro: {
                        purple: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/IllusionCircleOutro_02_Regular_Purple_800x800.webm'
                    }
                },
                necromancy: {
                    intro: {
                        green: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/NecromancyCircleIntro_02_Regular_Green_800x800.webm',
                    },
                    loop: {
                        green: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/NecromancyCircleLoop_02_Regular_Green_800x800.webm',
                    },
                    outro: {
                        green: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/NecromancyCircleOutro_02_Regular_Green_800x800.webm'
                    }
                },
                transmutation: {
                    intro: {
                        yellow: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/TransmutationCircleIntro_02_Regular_Yellow_800x800.webm',
                    },
                    loop: {
                        yellow: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/TransmutationCircleLoop_02_Regular_Yellow_800x800.webm',
                    },
                    outro: {
                        yellow: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/TransmutationCircleOutro_02_Regular_Yellow_800x800.webm'
                    }
                }
            }
        },
        rune: {
            abjuration: {
                intro: {
                    blue: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/AbjurationRuneIntro_01_Regular_Blue_400x400.webm',
                },
                loop: {
                    blue: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/AbjurationRuneLoop_01_Regular_Blue_400x400.webm',
                },
                outro: {
                    blue: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/AbjurationRuneOutro_01_Regular_Blue_400x400.webm'
                }
            },
            conjuration: {
                intro: {
                    yellow: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/ConjurationRuneIntro_01_Regular_Yellow_400x400.webm',
                },
                loop: {
                    yellow: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/ConjurationRuneLoop_01_Regular_Yellow_400x400.webm',
                },
                outro: {
                    yellow: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/ConjurationRuneOutro_01_Regular_Yellow_400x400.webm'
                }
            },
            divination: {
                intro: {
                    blue: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/DivinationRuneIntro_01_Regular_Blue_400x400.webm',
                },
                loop: {
                    blue: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/DivinationRuneLoop_01_Regular_Blue_400x400.webm',
                },
                outro: {
                    blue: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/DivinationRuneOutro_01_Regular_Blue_400x400.webm'
                }
            },
            enchantment: {
                intro: {
                    pink: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/EnchantmentRuneIntro_01_Regular_Pink_400x400.webm',
                },
                loop: {
                    pink: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/EnchantmentRuneLoop_01_Regular_Pink_400x400.webm',
                },
                outro: {
                    pink: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/EnchantmentRuneOutro_01_Regular_Pink_400x400.webm'
                }
            },
            evocation: {
                intro: {
                    red: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/EvocationRuneIntro_01_Regular_Red_400x400.webm',
                },
                loop: {
                    red: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/EvocationRuneLoop_01_Regular_Red_400x400.webm',
                },
                outro: {
                    red: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/EvocationRuneOutro_01_Regular_Red_400x400.webm'
                }
            },
            illusion: {
                intro: {
                    purple: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/IllusionRuneIntro_01_Regular_Purple_400x400.webm',
                },
                loop: {
                    purple: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/IllusionRuneLoop_01_Regular_Purple_400x400.webm',
                },
                outro: {
                    purple: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/IllusionRuneOutro_01_Regular_Purple_400x400.webm'
                }
            },
            necromancy: {
                intro: {
                    green: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/NecromancyRuneIntro_01_Regular_Green_400x400.webm',
                },
                loop: {
                    green: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/NecromancyRuneLoop_01_Regular_Green_400x400.webm',
                },
                outro: {
                    green: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/NecromancyRuneOutro_01_Regular_Green_400x400.webm'
                }
            },
            transmutation: {
                intro: {
                    yellow: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/TransmutationRuneIntro_01_Regular_Yellow_400x400.webm',
                },
                loop: {
                    yellow: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/TransmutationRuneLoop_01_Regular_Yellow_400x400.webm',
                },
                outro: {
                    yellow: 'modules/JB2A_DnD5e/Library/Generic/Magic_Signs/Runes/TransmutationRuneOutro_01_Regular_Yellow_400x400.webm'
                }
            }

        }
    },
    markers: {
        '01': {
            blueyellow: "modules/JB2A_DnD5e/Library/Generic/Marker/Marker_01_Regular_BlueYellow_400x400.webm"
        },
        bubble: {
            intro: {
                blue: 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerBubbleIntro_01_Regular_Blue_400x400.webm'
            },
            loop: {
                blue: 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerBubble_01_Regular_Blue_400x400.webm'
            },
            outro: {
                blue: 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerBubbleOutro_01_Regular_Blue_400x400.webm'
            }
        },
        circle_of_stars:{
            blue: 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerCircleOfStars_Regular_Blue_400x400.webm'
        },
        drop: {
            red: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerDrop_01_Regular_Red_400x400.webm',
                '02': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerDrop_02_Regular_Red_400x400.webm',
                '03': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerDrop_03_Regular_Red_400x400.webm'
            },
        },
        fear: {
            dark_purple: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerFear_01_Dark_Purple_400x400.webm',
                '02': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerFear_02_Dark_Purple_400x400.webm',
                '03': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerFear_03_Dark_Purple_400x400.webm'
            },
        },
        heart: {
            pink: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerHeart_01_Regular_Pink_400x400.webm',
                '02': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerHeart_02_Regular_Pink_400x400.webm',
                '03': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerHeart_03_Regular_Pink_400x400.webm'
            },
        },
        horror: {
            purple: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerHorror_01_Regular_Purple_400x400.webm',
                '02': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerHorror_02_Regular_Purple_400x400.webm',
                '03': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerHorror_03_Regular_Purple_400x400.webm'
            },
        },
        light: {
            intro: {
                blue: 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerLightIntro_01_Regular_Blue_400x400.webm'
            },
            loop: {
                blue: 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerLight_01_Regular_Blue_400x400.webm'
            },
            no_pulse: {
                blue: 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerLightNoPulse_01_Regular_Blue_400x400.webm'
            },
            outro: {
                blue: 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerLightOutro_01_Regular_Blue_400x400.webm'
            }
        },
        music: {
            greenorange: "modules/JB2A_DnD5e/Library/Generic/Marker/MusicMarker_01_Regular_GreenOrange_400x400.webm"
        },
        music_note: {
            blue: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerMusicNote_01_Regular_Blue_400x400.webm',
                '02': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerMusicNote_02_Regular_Blue_400x400.webm',
                '03': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerMusicNote_03_Regular_Blue_400x400.webm'
            }
        },
        poison: {
            dark_green: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerPoison_01_Dark_Green_400x400.webm',
                '02': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerPoison_02_Dark_Green_400x400.webm',
                '03': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerPoison_03_Dark_Green_400x400.webm'
            }
        },
        runes: {
            dark_orange: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes_01_Dark_Orange_400x400.webm',
                '02': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes_02_Dark_Orange_400x400.webm',
                '03': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes_03_Dark_Orange_400x400.webm'
            },
            orange: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes_01_Regular_Orange_400x400.webm',
                '02': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes_02_Regular_Orange_400x400.webm',
                '03': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerRunes_03_Regular_Orange_400x400.webm'
            }
        },
        shield: {
            green: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerShield_01_Regular_Green_400x400.webm',
                '02': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerShield_02_Regular_Green_400x400.webm',
                '03': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerShield_03_Regular_Green_400x400.webm'
            }
        },
        shield_cracked: {
            purple: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerShieldCracked_01_Regular_Purple_400x400.webm',
                '02': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerShieldCracked_02_Regular_Purple_400x400.webm',
                '03': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerShieldCracked_03_Regular_Purple_400x400.webm'
            }
        },
        skull: {
            dark_orange: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerSkull_01_Dark_Orange_400x400.webm',
                '02': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerSkull_02_Dark_Orange_400x400.webm',
                '03': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerSkull_03_Dark_Orange_400x400.webm',
            },
            purple: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerSkull_01_Regular_Purple_400x400.webm',
                '02': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerSkull_02_Regular_Purple_400x400.webm',
                '03': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerSkull_03_Regular_Purple_400x400.webm'
            }
        },
        snowflake: {
            blue: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerSnowflake_01_Regular_Blue_400x400.webm',
                '02': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerSnowflake_02_Regular_Blue_400x400.webm',
                '03': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerSnowflake_03_Regular_Blue_400x400.webm'
            }
        },
        stun: {
            purple: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerStun_01_Regular_Purple_400x400.webm',
                '02': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerStun_02_Regular_Purple_400x400.webm',
                '03': 'modules/JB2A_DnD5e/Library/Generic/Marker/MarkerStun_03_Regular_Purple_400x400.webm'
            }
        }
    },
    maul: {
        _template: 'melee',
        melee: {
            white: 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Maul01_01_Regular_White_800x600.webm'
        }
    },
    misty_step: {
        '01': {
            blue: 'modules/JB2A_DnD5e/Library/2nd_Level/Misty_Step/MistyStep_01_Regular_Blue_400x400.webm'
        },
        '02': {
            blue: 'modules/JB2A_DnD5e/Library/2nd_Level/Misty_Step/MistyStep_02_Regular_Blue_400x400.webm'
        }
    },
    moonbeam: {
        '01': {
            intro: {
                blue: 'modules/JB2A_DnD5e/Library/2nd_Level/Moonbeam/MoonbeamIntro_01_Regular_Blue_400x400.webm'
            },
            loop: {
                blue: 'modules/JB2A_DnD5e/Library/2nd_Level/Moonbeam/Moonbeam_01_Regular_Blue_400x400.webm'
            },
            no_pulse: {
                blue: 'modules/JB2A_DnD5e/Library/2nd_Level/Moonbeam/MoonbeamNoPulse_01_Regular_Blue_400x400.webm'
            },
            outro: {
                blue: 'modules/JB2A_DnD5e/Library/2nd_Level/Moonbeam/MoonbeamOutro_01_Regular_Blue_400x400.webm'
            }
        }
    },
    music_notations: {
        bass_clef: {
            blue: "modules/JB2A_DnD5e/Library/Generic/Music_Notation/BassClef_01_Regular_Blue_200x200.webm"
        },
        beamed_quavers: {
            blue: "modules/JB2A_DnD5e/Library/Generic/Music_Notation/BeamedQuavers_01_Regular_Blue_200x200.webm"
        },
        crotchet: {
            blue: "modules/JB2A_DnD5e/Library/Generic/Music_Notation/Crotchet_01_Regular_Blue_200x200.webm"
        },
        flat: {
            blue: "modules/JB2A_DnD5e/Library/Generic/Music_Notation/Flat_01_Regular_Blue_200x200.webm"
        },
        quaver: {
            blue: "modules/JB2A_DnD5e/Library/Generic/Music_Notation/Quaver_01_Regular_Blue_200x200.webm"
        },
        sharp: {
            blue: "modules/JB2A_DnD5e/Library/Generic/Music_Notation/Sharp_01_Regular_Blue_200x200.webm"
        },
        treble_clef: {
            blue: "modules/JB2A_DnD5e/Library/Generic/Music_Notation/TrebleClef_01_Regular_Blue_200x200.webm"
        }
    },
    portals: {
        horizontal: {
            ring: {
                bright_yellow: "modules/JB2A_DnD5e/Library/Generic/Portals/Portal_Bright_Yellow_H_400x400.webm"
            }
        },
        vertical: {
            ring: {
                bright_yellow: "modules/JB2A_DnD5e/Library/Generic/Portals/Portal_Bright_Yellow_V_400x250.webm"
            }
        }
    },
    quarterstaff: {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_01_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_02_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_03_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_04_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_05_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Quarterstaff01_06_Regular_White_800x600.webm'
                ]
            }
        }
    },
    rapier: {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Rapier01_01_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Rapier01_02_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Rapier01_03_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Rapier01_04_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Rapier01_05_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Rapier01_06_Regular_White_800x600.webm'
                ]
            }
        }
    },
    ray_of_frost: {
        _template: 'ranged',
        blue: {
            '05ft': 'modules/JB2A_DnD5e/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Blue_05ft_600x400.webm',
            '15ft': 'modules/JB2A_DnD5e/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Blue_15ft_1000x400.webm',
            '30ft': 'modules/JB2A_DnD5e/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Blue_30ft_1600x400.webm',
            '60ft': 'modules/JB2A_DnD5e/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Blue_60ft_2800x400.webm',
            '90ft': 'modules/JB2A_DnD5e/Library/Cantrip/Ray_Of_Frost/RayOfFrost_01_Regular_Blue_90ft_4000x400.webm'
        }
    },
    scimitar: {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Scimitar01_01_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Scimitar01_02_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Scimitar01_03_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Scimitar01_04_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Scimitar01_05_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Scimitar01_06_Regular_White_800x600.webm'
                ]
            }
        }
    },
    scorched_earth: {
        black: "modules/JB2A_DnD5e/Library/Generic/Fire/ScorchedEarth_01_Black_800x800.webm"
    },
    scorching_ray: {
        _template: 'ranged',
        '01': {
            orange: {
                '05ft': 'modules/JB2A_DnD5e/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_05ft_600x400.webm',
                '15ft': 'modules/JB2A_DnD5e/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_15ft_1000x400.webm',
                '30ft': 'modules/JB2A_DnD5e/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_30ft_1600x400.webm',
                '60ft': 'modules/JB2A_DnD5e/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_60ft_2800x400.webm',
                '90ft': 'modules/JB2A_DnD5e/Library/2nd_Level/Scorching_Ray/ScorchingRay_01_Regular_Orange_90ft_4000x400.webm'
            }
        }
    },
    screen_overlay: {
        '01': {
            bad_omen: 'modules/JB2A_DnD5e/Library/Generic/Screen_Overlay/BadOmen01_01_Dark_Black_1920x1080.webm'
        }
    },
    shatter: {
        blue: 'modules/JB2A_DnD5e/Library/2nd_Level/Shatter/Shatter_01_Blue_400x400.webm'
    },
    shield: {
        '01': {
            intro: {
                blue: 'modules/JB2A_DnD5e/Library/1st_Level/Shield/Shield_01_Regular_Blue_Intro_400x400.webm'
            },
            loop: {
                blue: 'modules/JB2A_DnD5e/Library/1st_Level/Shield/Shield_01_Regular_Blue_Loop_400x400.webm'
            },
            outro_explode: {
                blue: 'modules/JB2A_DnD5e/Library/1st_Level/Shield/Shield_01_Regular_Blue_OutroExplode_400x400.webm'
            },
            outro_fade: {
                blue: 'modules/JB2A_DnD5e/Library/1st_Level/Shield/Shield_01_Regular_Blue_OutroFade_400x400.webm'
            }
        }
    },
    shield_themed: {
        above: {
            eldritch_web: {
                '01': {
                    dark_purple: 'modules/JB2A_DnD5e/Library/Generic/Energy/ShieldEldritchWebAbove01_01_Dark_Purple_400x400.webm'
                }
            },
            fire: {
                '01': {
                    orange: 'modules/JB2A_DnD5e/Library/Generic/Fire/ShieldFireAbove01_01_Regular_Orange_400x400.webm'
                }
            },
            ice: {
                '01': {
                    blue: 'modules/JB2A_DnD5e/Library/Generic/Ice/ShieldIceAbove01_01_Regular_Blue_400x400.webm'
                }
            },
            molten_earth: {
                '01': {
                    orange: 'modules/JB2A_DnD5e/Library/Generic/Fire/ShieldMoltenEarthAbove01_01_Regular_Orange_400x400.webm'
                }
            }
        },
        below: {
            eldritch_web: {
                '01': {
                    dark_purple: 'modules/JB2A_DnD5e/Library/Generic/Energy/ShieldEldritchWebBelow01_01_Dark_Purple_400x400.webm'
                }
            },
            fire: {
                '01': {
                    orange: 'modules/JB2A_DnD5e/Library/Generic/Fire/ShieldFireBelow01_01_Regular_Orange_400x400.webm'
                }
            },
            ice: {
                '01': {
                    blue: 'modules/JB2A_DnD5e/Library/Generic/Ice/ShieldIceBelow01_01_Regular_Blue_400x400.webm'
                }
            },
            molten_earth: {
                '01': {
                    orange: 'modules/JB2A_DnD5e/Library/Generic/Fire/ShieldMoltenEarthBelow01_01_Regular_Orange_400x400.webm'
                }
            }
        }
    },
    shortsword: {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Shortsword01_01_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Shortsword01_02_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Shortsword01_03_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Shortsword01_04_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Shortsword01_05_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Shortsword01_06_Regular_White_800x600.webm'
                ]
            }
        }
    },
    side_impact: {
        ice_shard: {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Impact/SideImpactIceShard01_01_Regular_Blue_600x600.webm'
        },
        part: {
            fast: {
                ice_shard: {
                    blue: 'modules/JB2A_DnD5e/Library/Generic/Impact/PartSideImpactFastIceShard01_01_Regular_Blue_600x600.webm',
                }
            },
            slow: {
                snowflake: {
                    blue: 'modules/JB2A_DnD5e/Library/Generic/Impact/PartSideImpactSlowSnowflake01_01_Regular_Blue_600x600.webm',
                }
            },
            smoke: {
                blue: {
                    '01': 'modules/JB2A_DnD5e/Library/Generic/Impact/PartSideImpactSmoke01_01_Regular_Blue_600x600.webm',
                    '02': 'modules/JB2A_DnD5e/Library/Generic/Impact/PartSideImpactSmoke02_01_Regular_Blue_600x600.webm',
                    '03': 'modules/JB2A_DnD5e/Library/Generic/Impact/PartSideImpactSmoke03_01_Regular_Blue_600x600.webm'
                }
            },
            shockwave: {
                blue: 'modules/JB2A_DnD5e/Library/Generic/Impact/PartSideImpactShockwave01_01_Regular_Blue_600x600.webm',
            }
        }
    },
    sleep: {
        target: {
            pink: 'modules/JB2A_DnD5e/Library/1st_Level/Sleep/SleepMarker01_01_Regular_Pink_400x400.webm'
        },
        symbol: {
            dark_pink: 'modules/JB2A_DnD5e/Library/1st_Level/Sleep/SleepSymbol01_01_Dark_Pink_400x400.webm',
            pink: 'modules/JB2A_DnD5e/Library/1st_Level/Sleep/SleepSymbol01_01_Regular_Pink_400x400.webm'
        },
        cloud: {
            '01': {
                pink: 'modules/JB2A_DnD5e/Library/1st_Level/Sleep/Cloud01_01_Regular_Pink_400x400.webm'
            },
            '02': {
                pink: 'modules/JB2A_DnD5e/Library/1st_Level/Sleep/Cloud01_02_Regular_Pink_400x400.webm'
            }
        }
    },
    sleet_storm: {
        blue: 'modules/JB2A_DnD5e/Library/3rd_Level/Sleet_Storm/SleetStorm_01_Blue_800x800.webm'
    },
    sneak_attack: {
        dark_green: 'modules/JB2A_DnD5e/Library/1st_Level/Sneak_Attack/Sneak_Attack_Dark_Green_300x300.webm'
    },
    sneak_attack_text: {
        '01': {
            dark_red: 'modules/JB2A_DnD5e/Library/Generic/UI/SneakAttackText_01_Dark_Red_400x400.webm'
        },
        '02': {
            dark_red: 'modules/JB2A_DnD5e/Library/Generic/UI/SneakAttackText_02_Dark_Red_400x400.webm'
        }
    },
    snowball_toss: {
        _template: 'ranged',
        white: {
            '01': {
                '05ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_05ft_600x500.webm',
                '15ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_15ft_1000x500.webm',
                '30ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_30ft_1600x500.webm',
                '60ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_60ft_2800x500.webm',
                '90ft': 'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_90ft_4000x500.webm',
            }
        }
    },
    spear: {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Spear01_01_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Spear01_02_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Spear01_03_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Spear01_04_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Spear01_05_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Spear01_06_Regular_White_800x600.webm'
                ]
            }
        }
    },
    spell_projectile: {
        ice_shard: {
            blue: {
                '05ft': 'modules/JB2A_DnD5e/Library/Generic/RangedSpell/ProjectileIceShard01_01_Regular_Blue_05ft_600x400.webm',
                '15ft': 'modules/JB2A_DnD5e/Library/Generic/RangedSpell/ProjectileIceShard01_01_Regular_Blue_15ft_1000x400.webm',
                '30ft': 'modules/JB2A_DnD5e/Library/Generic/RangedSpell/ProjectileIceShard01_01_Regular_Blue_30ft_1600x400.webm',
                '60ft': 'modules/JB2A_DnD5e/Library/Generic/RangedSpell/ProjectileIceShard01_01_Regular_Blue_60ft_2800x400.webm',
                '90ft': 'modules/JB2A_DnD5e/Library/Generic/RangedSpell/ProjectileIceShard01_01_Regular_Blue_90ft_4000x400.webm'
            }
        }
    },
    sphere_of_annihilation: {
        '200px': {
            purple: "modules/JB2A_DnD5e/Library/Generic/Item/SphereOfAnnihilation_01_Regular_Purple_200x200.webm"
        },
        '600px': {
            purple: "modules/JB2A_DnD5e/Library/Generic/Item/SphereOfAnnihilation_01_Regular_Purple_600x600.webm"
        }
    },
    spirit_guardians: {
        blueyellow: 'modules/JB2A_DnD5e/Library/3rd_Level/Spirit_Guardians/SpiritGuardians_01_Light_BlueYellow_600x600.webm'
    },
    spiritual_weapon: {
        mace: {
            flaming: {
                yellow: "modules/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Mace01_01_Flaming_Yellow_200x200.webm"
            },
            spectral: {
                blue: "modules/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Mace01_01_Spectral_Blue_200x200.webm"
            }
        },
        maul: {
            flaming: {
                yellow: "modules/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Maul01_01_Flaming_Yellow_200x200.webm"
            },
            spectral: {
                blue: "modules/JB2A_DnD5e/Library/2nd_Level/Spiritual_Weapon/SpiritualWeapon_Maul01_01_Spectral_Blue_200x200.webm"
            }
        }
    },
    static_electricity: {
        '01': {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Lightning/StaticElectricity_01_Regular_Blue_400x400.webm'
        },
        '02': {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Lightning/StaticElectricity_02_Regular_Blue_400x400.webm'
        }
    },
    swirling_sparkles: {
        '01': {
            blue: 'modules/JB2A_DnD5e/Library/Generic/Energy/SwirlingSparkles_01_Regular_Blue_400x400.webm'
        }
    },
    sword: {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Sword01_01_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Sword01_02_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Sword01_03_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Sword01_04_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Sword01_05_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Sword01_06_Regular_White_800x600.webm'
                ]
            }
        }
    },
    template_circle: {
        symbol: {
            normal: {
                drop: {
                    red: 'modules/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateDropCircle_01_Regular_Red_800x800.webm'
                },
                fear: {
                    dark_purple: 'modules/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateFearCircle_01_Dark_Purple_800x800.webm'
                },
                heart: {
                    pink: 'modules/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateHeartCircle_01_Regular_Pink_800x800.webm'
                },
                horror: {
                    purple: 'modules/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateHorrorCircle_01_Regular_Purple_800x800.webm'

                },
                music_note: {
                    blue: 'modules/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateMusicNoteCircle_01_Regular_Blue_800x800.webm'
                },
                poison: {
                    dark_green: 'modules/JB2A_DnD5e/Library/Generic/Template/Circle/TemplatePoisonCircle_01_Dark_Green_800x800.webm'
                },
                runes: {
                    orange: 'modules/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateRunesCircle_01_Regular_Orange_800x800.webm'
                },
                shield: {
                    green: 'modules/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateShieldCircle_01_Regular_Green_800x800.webm'
                },
                shield_cracked: {
                    purple: 'modules/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateShieldCrackedCircle_01_Regular_Purple_800x800.webm'
                },
                skull: {
                    purple: 'modules/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateSkullCircle_01_Regular_Purple_800x800.webm'
                },
                snowflake: {

                    blue: 'modules/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateSnowflakeCircle_01_Regular_Blue_800x800.webm'
                },
                stun: {
                    purple: 'modules/JB2A_DnD5e/Library/Generic/Template/Circle/TemplateStunCircle_01_Regular_Purple_800x800.webm'
                }
            }
        },
        out_pulse: {
            '01': {
                burst: {
                    bluewhite: "modules/JB2A_DnD5e/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_BlueWhite_Burst_600x600.webm"
                },
                loop: {
                    bluewhite: "modules/JB2A_DnD5e/Library/Generic/Template/Circle/OutPulse/OutPulse_01_Regular_BlueWhite_Loop_600x600.webm"
                }
            },
            '02': {
                burst: {
                    bluewhite: "modules/JB2A_DnD5e/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_BlueWhite_Burst_600x600.webm"
                },
                loop: {
                    bluewhite: "modules/JB2A_DnD5e/Library/Generic/Template/Circle/OutPulse/OutPulse_02_Regular_BlueWhite_Loop_600x600.webm"
                }
            }
        },
        vortex: {
            loop: {
                blue: 'modules/JB2A_DnD5e/Library/Generic/Template/Circle/Vortex_01_Regular_Blue_600x600.webm'
            },
            intro: {
                blue: 'modules/JB2A_DnD5e/Library/Generic/Template/Circle/VortexIntro_01_Regular_Blue_600x600.webm'
            },
            outro: {
                blue: 'modules/JB2A_DnD5e/Library/Generic/Template/Circle/VortexOutro_01_Regular_Blue_600x600.webm'
            }
        },
        whirl: {
            loop: {
                blue: 'modules/JB2A_DnD5e/Library/Generic/Template/Circle/Whirl_01_Regular_Blue_600x600.webm'
            },
            intro: {
                blue: 'modules/JB2A_DnD5e/Library/Generic/Template/Circle/WhirlIntro_01_Regular_Blue_600x600.webm'
            },
            outro: {
                blue: 'modules/JB2A_DnD5e/Library/Generic/Template/Circle/WhirlOutro_01_Regular_Blue_600x600.webm'
            }
        }
    },
    template_square: {
        symbol: {
            normal: {
                drop: {
                    red: 'modules/JB2A_DnD5e/Library/Generic/Template/Square/TemplateDropSquare_01_Regular_Red_600x600.webm'
                },
                fear: {
                    dark_purple: 'modules/JB2A_DnD5e/Library/Generic/Template/Square/TemplateFearSquare_01_Dark_Purple_600x600.webm'
                },
                heart: {
                    pink: 'modules/JB2A_DnD5e/Library/Generic/Template/Square/TemplateHeartSquare_01_Regular_Pink_600x600.webm'
                },
                horror: {
                    purple: 'modules/JB2A_DnD5e/Library/Generic/Template/Square/TemplateHorrorSquare_01_Regular_Purple_600x600.webm'
                },
                music_note: {
                    blue: 'modules/JB2A_DnD5e/Library/Generic/Template/Square/TemplateMusicNoteSquare_01_Regular_Blue_600x600.webm'
                },
                poison: {
                    dark_green: 'modules/JB2A_DnD5e/Library/Generic/Template/Square/TemplatePoisonSquare_01_Dark_Green_600x600.webm'
                },
                runes: {
                    orange: 'modules/JB2A_DnD5e/Library/Generic/Template/Square/TemplateRunesSquare_01_Regular_Orange_600x600.webm'
                },
                shield: {
                    green: 'modules/JB2A_DnD5e/Library/Generic/Template/Square/TemplateShieldSquare_01_Regular_Green_600x600.webm',
                },
                shield_cracked: {
                    purple: 'modules/JB2A_DnD5e/Library/Generic/Template/Square/TemplateShieldCrackedSquare_01_Regular_Purple_600x600.webm',
                },
                skull: {
                    purple: 'modules/JB2A_DnD5e/Library/Generic/Template/Square/TemplateSkullSquare_01_Regular_Purple_600x600.webm',
                },
                snowflake: {
                    blue: 'modules/JB2A_DnD5e/Library/Generic/Template/Square/TemplateSnowflakeSquare_01_Regular_Blue_600x600.webm'
                },
                stun: {
                    purple: 'modules/JB2A_DnD5e/Library/Generic/Template/Square/TemplateStunSquare_01_Regular_Purple_600x600.webm'
                }
            },
        }
    },
    token_border: {
        circle: {
            static: {
                blue: {
                    '001': 'modules/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircle_01_Regular_Blue_400x400.webm',
                    '002': 'modules/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircle_02_Regular_Blue_400x400.webm',
                    '003': 'modules/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircle_03_Regular_Blue_400x400.webm',
                    '004': 'modules/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircle_04_Regular_Blue_400x400.webm',
                    '005': 'modules/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircle_05_Regular_Blue_400x400.webm',
                    '006': 'modules/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircle_06_Regular_Blue_400x400.webm',
                    '007': 'modules/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircle_07_Regular_Blue_400x400.webm'
                }
            },
            spinning: {
                blue: {
                    '001': 'modules/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircleSpin_01_Regular_Blue_400x400.webm',
                    '002': 'modules/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircleSpin_02_Regular_Blue_400x400.webm',
                    '003': 'modules/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircleSpin_03_Regular_Blue_400x400.webm',
                    '004': 'modules/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircleSpin_04_Regular_Blue_400x400.webm',
                    '005': 'modules/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircleSpin_05_Regular_Blue_400x400.webm',
                    '006': 'modules/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircleSpin_06_Regular_Blue_400x400.webm',
                    '007': 'modules/JB2A_DnD5e/Library/Generic/Token_Border/TokenBorderCircleSpin_07_Regular_Blue_400x400.webm'
                }
            }
        }
    },
    toll_the_dead: {
        green: {
            bell: 'modules/JB2A_DnD5e/Library/Cantrip/Toll_The_Dead/TollTheDeadBell_01_Regular_Green_400x400.webm',
            complete: 'modules/JB2A_DnD5e/Library/Cantrip/Toll_The_Dead/TollTheDead_01_Regular_Green_400x400.webm',
            shockwave: 'modules/JB2A_DnD5e/Library/Cantrip/Toll_The_Dead/TollTheDeadShockwave_01_Regular_Green_400x400.webm',
            skull_smoke: 'modules/JB2A_DnD5e/Library/Cantrip/Toll_The_Dead/TollTheDeadSkullSmoke_01_Regular_Green_400x400.webm'
        }
    },
    thunderwave: {
        bottom_left: {
            blue: 'modules/JB2A_DnD5e/Library/1st_Level/Thunderwave/Thunderwave_01_Bright_Blue_BLeft_600x600.webm'
        },
        bottom_middle: {
            blue: 'modules/JB2A_DnD5e/Library/1st_Level/Thunderwave/Thunderwave_01_Bright_Blue_BMid_600x600.webm'
        },
        center: {
            blue: 'modules/JB2A_DnD5e/Library/1st_Level/Thunderwave/Thunderwave_01_Bright_Blue_Center_600x600.webm'
        }
    },
    twinkling_stars: {
        points04: {
            orange: "modules/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_04_Orange_100x100.webm",
            white: "modules/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_04_100x100.webm"
        },
        points05: {
            orange: "modules/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_05_Orange_100x100.webm",
            white: "modules/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_05_100x100.webm"
        },
        points06: {
            orange: "modules/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_06_Orange_100x100.webm",
            white: "modules/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_06_100x100.webm"
        },
        points07: {
            orange: "modules/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_07_Orange_100x100.webm",
            white: "modules/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_07_100x100.webm"
        },
        points08: {
            orange: "modules/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_08_Orange_100x100.webm",
            white: "modules/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_08_100x100.webm"
        },
        points09: {
            orange: "modules/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_09_Orange_100x100.webm",
            white: "modules/JB2A_DnD5e/Library/Generic/Twinkling_Stars/TwinklingStars_09_100x100.webm"
        }
    },
    ui: {
        chevrons3: {
            yellow: "modules/JB2A_DnD5e/Library/Generic/UI/3Chevrons_01_Regular_Yellow_200x200.webm"
        },
        critical: {
            red: "modules/JB2A_DnD5e/Library/Generic/UI/Critical_02_Red_200x200.webm"
        },
        indicator: {
            yellow: "modules/JB2A_DnD5e/Library/Generic/UI/Indicator_01_Regular_Yellow_200x200.webm"
        },
        miss: {
            white: "modules/JB2A_DnD5e/Library/Generic/UI/Miss_02_White_200x200.webm"
        }
    },
    unarmed_strike: {
        _template: 'melee',
        magical: {
            '01': {
                blue: "modules/JB2A_DnD5e/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Magical01_800x600.webm"
            },
            '02': {
                blue: "modules/JB2A_DnD5e/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Magical02_800x600.webm"
            }
        },
        physical: {
            '01': {
                blue: "modules/JB2A_DnD5e/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Physical01_800x600.webm"
            },
            '02': {
                blue: "modules/JB2A_DnD5e/Library/Generic/Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Physical02_800x600.webm"
            }
        }
    },
    wall_of_fire: {
        '100x100': {
            blue: 'modules/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Blue_100x100.webm',
            yellow: 'modules/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Yellow_100x100.webm'
        },
        '200x100': {
            blue: 'modules/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Blue_200x100.webm',
            yellow: 'modules/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Yellow_200x100.webm'
        },
        '300x100': {
            blue: 'modules/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Blue_300x100.webm',
            yellow: 'modules/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Yellow_300x100.webm'
        },
        '500x100': {
            blue: 'modules/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Blue_Ring_400x400.webm',
            yellow: 'modules/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Yellow_Ring_400x400.webm'
        },
        Ring: {
            blue: 'modules/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Blue_Ring_400x400.webm',
            yellow: 'modules/JB2A_DnD5e/Library/4th_Level/Wall_Of_Fire/WallOfFire_01_Yellow_Ring_400x400.webm'
        }
    },
    wall_of_force: {
        horizontal: {
            grey: "modules/JB2A_DnD5e/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Grey_H_200x200.webm"
        },
        sphere: {
            grey: "modules/JB2A_DnD5e/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Grey_Sphere_400x400.webm"
        },
        vertical: {
            grey: "modules/JB2A_DnD5e/Library/5th_Level/Wall_Of_Force/WallOfForce_01_Grey_V_200x25.webm"
        }
    },
    ward: {
        rune: {
            yellow: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Marker/WardRune_01_Regular_Yellow_600x600.webm'
            }
        },
        star: {
            yellow: {
                '01': 'modules/JB2A_DnD5e/Library/Generic/Marker/WardStar_01_Regular_Yellow_600x600.webm'
            }
        }
    },
    warhammer: {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Warhammer01_01_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Warhammer01_02_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Warhammer01_03_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Warhammer01_04_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Warhammer01_05_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Warhammer01_06_Regular_White_800x600.webm'
                ]
            }
        }
    },
    web: {
        '01': 'modules/JB2A_DnD5e/Library/2nd_Level/Web/Web_01_White_01_400x400.webm',
        '02': 'modules/JB2A_DnD5e/Library/2nd_Level/Web/Web_01_White_02_400x400.webm'
    },
    whirlwind: {
        bluegrey: "modules/JB2A_DnD5e/Library/7th_Level/Whirlwind/Whirlwind_01_BlueGrey_01_400x400.webm"
    },
    wind_wall: {
        '100x100': 'modules/JB2A_DnD5e/Library/3rd_Level/Wind_Wall/WindWall_01_100x100.webm',
        '200x100': 'modules/JB2A_DnD5e/Library/3rd_Level/Wind_Wall/WindWall_01_200x100.webm',
        '300x100': 'modules/JB2A_DnD5e/Library/3rd_Level/Wind_Wall/WindWall_01_300x100.webm',
        '500x100': 'modules/JB2A_DnD5e/Library/3rd_Level/Wind_Wall/WindWall_01_500x100.webm'
    },
    wind_stream: {
        white: "modules/JB2A_DnD5e/Library/Generic/Wind/WindStreams_01_White_20OPA_1200x1200.webm"
    },
    witch_bolt: {
        _template: 'ranged',
        blue: {
            '05ft': 'modules/JB2A_DnD5e/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Blue_05ft_600x400.webm',
            '15ft': 'modules/JB2A_DnD5e/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Blue_15ft_1000x400.webm',
            '30ft': 'modules/JB2A_DnD5e/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Blue_30ft_1600x400.webm',
            '60ft': 'modules/JB2A_DnD5e/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Blue_60ft_2800x400.webm',
            '90ft': 'modules/JB2A_DnD5e/Library/1st_Level/Witch_Bolt/WitchBolt_01_Regular_Blue_90ft_4000x400.webm'
        }
    },
    wrench: {
        melee: {
            _template: 'melee',
            '01': {
                white: [
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Wrench01_01_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Wrench01_02_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Wrench01_03_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Wrench01_04_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Wrench01_05_Regular_White_800x600.webm',
                    'modules/JB2A_DnD5e/Library/Generic/Weapon_Attacks/Melee/Wrench01_06_Regular_White_800x600.webm'
                ]
            }
        }
    },
}
Hooks.on("sequencer.ready", () => {
    Sequencer.Database.registerEntries("jb2a", freeDatabase);
});