import StarIcon from '@/shared/assets/star.svg?react';

export const TARIFFS_CATEGORIES = [
  { id: 'a', label: 'Бюджетные тарифы' },
  { id: 'b', label: 'Популярные тарифы', icon: <StarIcon /> },
  { id: 'c', label: 'Производительные тарифы' },
];

export const TARIFFS = [
  {
    name: 'Стартовый Базовый',
    isPopular: true,
    description:
      'Лёгкий и надёжный VPS на Linux для тестов и простых задач. Максимальная надёжность по доступной цене.',
    cpu: '1 vCPU AMD Ryzen 9 5950X',
    ram: '2 GB DDR4',
    storage: '50 GB NVMe SSD',
    traffic: '1 Гбит/с',
    oldPrice: '5,99',
    price: '2,29',
  },
  {
    name: 'Стартовый Плюс',
    isPopular: true,
    description:
      'Лёгкий и надёжный VPS на Linux для тестов и простых задач. Максимальная надёжность по доступной цене.',
    cpu: '1 vCPU AMD Ryzen 9 5950X',
    ram: '2 GB DDR4',
    storage: '50 GB NVMe SSD',
    traffic: '1 Гбит/с',
    oldPrice: '5,99',
    price: '2,29',
  },
  {
    name: 'Стартовый Макс',
    description:
      'Лёгкий и надёжный VPS на Linux для тестов и простых задач. Максимальная надёжность по доступной цене.',
    cpu: '1 vCPU AMD Ryzen 9 5950X',
    ram: '2 GB DDR4',
    storage: '50 GB NVMe SSD',
    traffic: '1 Гбит/с',
    price: '2,29',
  },
  {
    name: 'Стартовый Макс +',
    isAvailable: false,
    description:
      'Лёгкий и надёжный VPS на Linux для тестов и простых задач. Максимальная надёжность по доступной цене.',
    cpu: '1 vCPU AMD Ryzen 9 5950X',
    ram: '2 GB DDR4',
    storage: '50 GB NVMe SSD',
    traffic: '1 Гбит/с',
    price: '2,29',
  },
];
